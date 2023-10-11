const mongoose = require("mongoose");


const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post", //reference to the post model 
    },
    user:{
        type: String,
        required:true,
    },
});

//Once you have defined the schema, you create a model using mongoose.model by commentSchema
const Like = mongoose.model("Like",likeSchema);

module.exports = Like;