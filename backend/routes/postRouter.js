const { Router } = require('express')
const router = Router();
const { createPost, getPosts, getPostsById, deletePost  } = require('../controllers/postController');


router.post('/post', createPost)
router.get('/posts', getPosts)
router.get('/posts/:id', getPostsById)
router.delete('/post/:id', deletePost)

module.exports = router;
