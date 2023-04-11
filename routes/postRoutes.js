const express = require('express');
const {addPost,updatePost,deletePost,getAllPost,getPostById,getPostBySearch}= require('../controller/postC')
const { isAuthenticatedUser} = require('../middleware/auth');
const router = express.Router();

router.route('/allPosts').get(isAuthenticatedUser,getAllPost);
router.route('/postSearch/:key').get(isAuthenticatedUser,getPostBySearch);
router.route('/newPost').post(isAuthenticatedUser,addPost);
router.route('/posts/:id').put(isAuthenticatedUser,updatePost)
router.route('/posts/:id').delete(isAuthenticatedUser,deletePost)
router.route('/posts/:id').get(isAuthenticatedUser,getPostById);
module.exports = router