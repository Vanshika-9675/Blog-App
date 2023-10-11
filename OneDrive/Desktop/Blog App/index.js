const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());


//importing routes
const blog = require("./routes/blog");
//mounting path
app.use("/api/v1", blog);

//connection with db
const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, ()=>{
    console.log(`App is started at port no. ${PORT}`);
})


//default route
app.get("/" , (req,res)=>{
    res.send("<h1>This is home page baby</h1>")
})