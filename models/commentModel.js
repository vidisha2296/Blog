const mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
  content: String,
  createdAt: { type: Date, default: Date.now, required: true },
  postId: { type: mongoose.Schema.ObjectId, ref: "Post", required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
});

module.exports= mongoose.model("Comment", commentSchema);