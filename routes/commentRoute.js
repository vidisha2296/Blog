const express = require('express');
const {addComment,updateComment,deleteComment} =require('../controller/commentC')
const { isAuthenticatedUser} = require('../middleware/auth');
const router = express.Router();


router.route('/newComment').post(isAuthenticatedUser,addComment);
router.route('/comment/:id').put(isAuthenticatedUser,updateComment)
router.route('/comment/:id').delete(isAuthenticatedUser,deleteComment)
module.exports = router