// routes/postRoutes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define routes for post-related functionality
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;
