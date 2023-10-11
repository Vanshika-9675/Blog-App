const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    //array of likes
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    //array of comments
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]

});

//Once you have defined the schema, you create a model using mongoose.model.
const Post = mongoose.model("Post",postSchema);

module.exports = Post;