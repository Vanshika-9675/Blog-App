const Like = require("../models/likeModel");
const Post = require("../models/postModel");


exports.likePost= async (req,res)=>{
    try{
        const {user,post}= req.body;

        const like = new Like({
            user,post
        });

        const savedLike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post, { $push : {likes: savedLike._id} },{new:true})
        .populate("likes").exec();

        res.json({
            post: updatedPost
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            error:"Error while liking Post",
        })
    }
}

//unlike post

exports.unlikePost = async (req,res)=>{
    try{
         //we have to delete like from like and from post also 
         console.log("Request Body:", req.body);
         const {post,like} = req.body;

         //find and delete from like collection 
         const deletedLike = await Like.findOneAndDelete({_id:like});

         //update the post collection 
         const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes:deletedLike._id}},{new:true});

        res.json({
            post: updatedPost
        });

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            error:"Error while unliking Post",
            message:err.message
        })
    }
}
