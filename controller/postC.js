const Post = require("../models/postModel");
const User = require("../models/userModel");
// const sendToken = require('../utils/jwtToken');
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.addPost = catchAsyncErrors(async (req, res, next) => {
  // const {name,email,password} = req.body;

  const newBlog = await Post.create(req.body);
  try {
    await newBlog.save();
    res.status(200).json({
      success: true,

      response: newBlog,
    });
  } catch (error) {
    // console.log(error)
    res.status(500).json({
      success: true,

      response: error,
    });
  }

  // res.send('Working Fine')
});
exports.getAllPost = catchAsyncErrors(async (req, res, next) => {
  const page = req.query.p || 0
  const blogPerPage =3

  // const {name,email,password} = req.body;

  try {
    const allBlogs = await Post.find({}).skip(page * blogPerPage);
    res.status(200).json({
      success: true,

      response: allBlogs,
    });
  } catch (error) {
    // console.log(error)
    res.status(500).json({
      success: true,

      response: error,
    });
  }

  // res.send('Working Fine')
});

exports.getPostById = catchAsyncErrors(async (req, res, next) => {
  // const {name,email,password} = req.body;
  const page = req.query.p || 0
  const blogPerPage =3
  try {
    const id = req.params.id;
    const post = await Post.findById(id).populate({
      path: "comments",
      populate: {
        path: "createdBy",
      },
    }).skip(page * blogPerPage);
    //   console.log(post.createdBy)
    //   const userId =post.createdBy
    //   console.log(userId)
    let responseData;
    if (post) {
      //get the name of the creator
      const user = await User.findById(post.createdBy);
      console.log(user, "name");
      responseData = {
        ...post.toObject(),
        createdByName: user.name,
        //   userImageUrl: user.imagePath,
      };
      console.log(responseData);
     
    }
    // const allBlogs =  await Post.find({});
    res.status(200).json({
        success: true,
  
        response: responseData,
      });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: true,

      response: error,
    });
  }

  // res.send('Working Fine')
});

exports.getPostBySearch = catchAsyncErrors(async (req, res, next) => {
  // const {name,email,password} = req.body;
  console.log(req.params.key)
  // const page = req.query.p || 0
  // const blogPerPage =3
  try {
    // const id = req.params.id;
    const post =  await Post.find(
      {
        "$or":[
            {title:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}
        ]
    }

    ) ;
    //   console.log(post.createdBy)
    //   const userId =post.createdBy
    //   console.log(userId)
    
    // const allBlogs =  await Post.find({});
    res.status(200).json({
        success: true,
  
        response: post,
      });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: true,

      response: error,
    });
  }

  // res.send('Working Fine')
});

exports.updatePost = catchAsyncErrors(async (req, res, next) => {
  // const {name,email,password} = req.body;

  const id = req.params.id;
  const updatedData = req.body;
  const options = { new: true };
  try {
    const updatedPostData = await Post.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.status(200).json({
      success: true,

      response: updatedPostData,
    });
  } catch (error) {
    // console.log(error)
    res.status(500).json({
      success: true,

      response: error,
    });
  }

  // res.send('Working Fine')
});

exports.deletePost = catchAsyncErrors(async (req, res, next) => {
  // const {name,email,password} = req.body;

  try {
    const id = req.params.id;
    const DeletedData = await Post.findByIdAndDelete(id);
    res.status(200).json({
      success: true,

      response: DeletedData,
    });
  } catch (error) {
    // console.log(error)
    res.status(500).json({
      success: true,

      response: error,
    });
  }

  // res.send('Working Fine')
});
