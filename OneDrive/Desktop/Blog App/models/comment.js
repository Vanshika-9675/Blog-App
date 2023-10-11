const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post", //reference to the post model 
    },
    user:{
        type: String,
        required:true,
    },
    body:{
        type:String,
        required:true
    }

});

//Once you have defined the schema, you create a model using mongoose.model.
//creating a Mongoose model named comment by using mongoose.model. The comment model is based on the commentSchema
const comment = mongoose.model("Comment",commentSchema);

module.exports = comment;