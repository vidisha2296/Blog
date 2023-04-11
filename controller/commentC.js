const Post = require('../models/postModel')
const Comment  = require('../models/commentModel')
// const sendToken = require('../utils/jwtToken');
const ErrorHandler = require("../utils/errorhandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.addComment = catchAsyncErrors(async (req,res,next)=>{
    // console.log(req.body)
    // const {name,email,password} = req.body;
     

    try {
        const foundPost = await Post.findById(req.body.postId);
        // console.log(foundPost)
        const createdComment = await Comment.create(req.body);
        // console.log(createdComment)
        await foundPost.comments.push(createdComment);
        const updatedPost = await foundPost.save();
        res.status(200).json({
           success: true,
          
            response:updatedPost
         });
    }catch(error){
        // console.log(error)
        res.status(500).json({
            success: true,
           
             response:error
          });
    }

     
    // res.send('Working Fine')

})

exports.updateComment = catchAsyncErrors(async (req,res,next)=>{
    // const {name,email,password} = req.body;
     
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    try {
        const updatedPostData = await Comment.findByIdAndUpdate(
            id, updatedData, options
        )
        res.status(200).json({
           success: true,
          
            response:updatedPostData
         });
    }catch(error){
        // console.log(error)
        res.status(500).json({
            success: true,
           
             response:error
          });
    }
     
    // res.send('Working Fine')

})

exports.deleteComment = catchAsyncErrors(async (req,res,next)=>{
    // const {name,email,password} = req.body;
     
    try {
        const id = req.params.id;
        const DeletedData = await Comment.findByIdAndDelete(id)
        res.status(200).json({
           success: true,
          
            response:DeletedData
         });
    }catch(error){
        // console.log(error)
        res.status(500).json({
            success: true,
           
             response:error
          });
    }
     
    // res.send('Working Fine')

})
