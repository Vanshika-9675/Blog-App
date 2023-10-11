const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = ()=>{
     mongoose.connect(process.env.DATABASE_URL,{
      useNewUrlParser:true,
      useUnifiedTopology: true
     })
     .then(console.log("Db connected successfully"))
     .catch((err)=>{
      console.error(err)
        console.log("Db facing connection issues");
        process.exit(1);
     })
};

module.exports = connectWithDb;