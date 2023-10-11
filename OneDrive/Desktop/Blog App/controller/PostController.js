const Post = require("../models/postModel");

exports.createPost = async (req,res)=>{
    try{
       const {title, body} = req.body;
       const post = new Post({
        title,body
       });
       const savedPost = await post.save();

       res.json({
         post:savedPost
       })
    }
    catch(err)
    {
       res.status(400).json({
         error: "Error while creating post"
       })
    }
}

//function for getting all the posts

exports.getAllPosts = async (req,res)=>{
    try{
        //if we use populate then whole data of comments displayed without usingit only comment ids will be displayed
        const posts = await Post.find().populate("comments");
        res.json({
            posts
        })
    }
    catch(err){
        res.status(400).json({
            error: "Error while creating post"
          })
    }
}