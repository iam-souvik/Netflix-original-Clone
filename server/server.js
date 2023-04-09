const express=require("express");
const cors=require("cors");
const {connectDatabase} = require("./config/db");
const {movieRoute} = require("./routes/movie.route");
const { userRoute } = require("./routes/user.route");
const app=express()
require("dotenv").config()
app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.use("/movie",movieRoute)  //movie route
app.use("/user",userRoute)      //user route

const PORT=process.env.PORT||8080
app.listen(PORT,()=>{
    console.log("Server started")
    try{
        connectDatabase()
        console.log("Db Connected")

    }catch(err){
        console.log("err",err)
    }
   
})