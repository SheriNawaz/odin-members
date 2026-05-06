const { Router } = require('express')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const { protect } = require('../middleware/authMiddleware')

const router = Router();

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: 'Strict',
    maxAge: 30*24*60*60*1000
}

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

//Register Route
router.post('/register', async(req, res) => {
    const { username, firstname, lastname, password } = req.body;
    if(!username || !firstname || !lastname || !password){
        return res.status(400).json({message:"Please provide all required fields"});
    }

    const userExists = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if(userExists.rows.length > 0){
        return res.status(400).json({message:"User already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query('INSERT INTO users (username, firstname, lastname, password) VALUES ($1, $2, $3, $4) RETURNING id, username, firstname, lastname', [username, firstname, lastname, hashedPassword]);
    const token = generateToken(newUser.rows[0].id);

    res.cookie('token', token, cookieOptions);
    return res.status(201).json({user: newUser.rows[0]})
})

//Login Route
router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({message:"Please provide all required fields"});
    }

    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if(user.rows.length === 0){
        return res.status(400).json({message:"Invalid credentials"});
    }

    const userData = user.rows[0];

    const isMatch = await bcrypt.compare(password, userData.password);

    if(!isMatch){
        return res.status(400).json({message:"Invalid credentials"});
    }

    const token = generateToken(userData.id);
    res.cookie('token', token, cookieOptions);
    res.json({user: {id:userData.id, username: userData.username, firstname: userData.firstname, lastname: userData.lastname}});
})

//Me
router.get('/me', protect, async (req, res) => {
    res.json(req.user)   
})

router.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM users WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Model not found' });
    }

    const userData  = result.rows[0];
    res.json({user: {id:userData.id, username: userData.username, firstname: userData.firstname, lastname: userData.lastname}});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

//Logout

router.post('/logout', (req, res)=>{
    res.cookie('token', {...cookieOptions, maxAge: 1});
    res.json({message: 'Logged out successfully'});
})

module.exports = router;
