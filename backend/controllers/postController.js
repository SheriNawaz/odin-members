const pool = require('../db');

const createPost = async (req, res) => {
  try {
    const { title, body, user } = req.body;

    if (!title||!body||!user) {
      return res.status(400).json({ error: 'Fields required' });
    }
    const now = new Date().toISOString();;
    const result = await pool.query(
      'INSERT INTO posts (title, body, time, user_id) VALUES ($1,$2, $3,$4) RETURNING *',
      [title, body, now, user]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const getPosts = async (req, res) => {
    try {
    const result = await pool.query(`
      SELECT 
        posts.id,
        posts.title,
        posts.body,
        posts.time,
        posts.user_id,
        users.firstname AS author_name
      FROM posts
      JOIN users ON posts.user_id = users.id
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


const getPostsById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM posts WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Model not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deletePost = async (req, res) => {
  try{
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM posts WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Model not found' });
    }

    res.json({ message: 'Model deleted', model: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createPost, getPosts, getPostsById, deletePost
};