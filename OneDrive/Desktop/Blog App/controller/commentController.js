const Comment = require("../models/comment");
const Post = require("../models/postModel");

exports.createComment = async (req,res)=>{
    try{
         //create function of mongoose
         //alternate way is to use save function
         const {post, user, body} =req.body;
         //create a comment object
         const comment = new Comment({
               post,user,body
         });
         //save the new comment object into the database
         const savedComment = await comment.save();

         //find the post by ID , add new comment to its comment array
         // {new:true} this for getting updated version 
         const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}},{new:true})
                            .populate("comments") //populate the comments array with comment documents
                            .exec();

        res.json({
            post:updatedPost,
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            error:"Error while creating comment",
        })
    }
}