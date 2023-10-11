const express = require("express");
const router = express.Router();

//import controlller
const {createComment} = require("../controller/CommentController");
const {createPost,getAllPosts} = require("../controller/PostController");
const {likePost,unlikePost} = require("../controller/LikeController");

//mapping
router.post("/comments/create",createComment);
router.post("/post/create",createPost);
router.get("/post",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

//export
module.exports = router;