// Require Express & Make App
const express = require("express");
const app = express();
// Require Mongoose
const mongoose = require("mongoose")
// Require users model
const UsersModel = require("./models/Users");
// Require User Router
const UserRouter = require("./Routes/UsersRouter")
// Require Express Session
const Session = require("express-session")
// Require Connect Mongo
const MongoStore = require("connect-mongo")
// Require  Order Router
const OrderRouter = require("./Routes/OrderRouter")
// Require Admin Router
const AdminRouter = require("./Routes/AdminRouter")
// Require CORS 
const cors = require("cors")

// Use Cors To Make http:\\LocalHost:3000 avilable to connect with this server
app.use(cors({
    origin : "http://localhost:5173" ,
    credentials : true

}))


// Make Connect with DataBase
mongoose.connect("mongodb://127.0.0.1:27017/FP_Mtam")
.then(async ()=>{
    console.log("Start Connect with DataBase");
    const Admin = await UsersModel.findOne({Name : "Admin" , Email : "Admin" , Password : "12345678" , Role : "Admin" })
    if (!Admin) {
        await UsersModel.create({Name : "Admin" , Email : "Admin" , Password : "12345678" , Role : "Admin"})
    }
})
.catch(err=>{
    console.log(`An Error : ${err}`);
})


// Make Session 
app.use(Session({
    secret : "@#asdf/1234/1971/1971#@",
    resave : false ,
    saveUninitialized : false ,
    cookie : {
        httpOnly : true ,
        
    } ,
    store : MongoStore.create({
        mongoUrl : "mongodb://127.0.0.1:27017/FP_Mtam" ,
        collectionName : "Sessions" ,

    })
}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/dist/index.html")
})

app.use(express.static("./dist"))
app.use(express.json())
app.use("/User",UserRouter)
app.use("/Order",OrderRouter)
app.use("/Admin",AdminRouter)
app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + "/dist/index.html")
})
app.use((err,req,res,next)=>{
    if (err) {
    res.send("AN ERROR , Pleas Try Again")
    
    } else {
        next()
    }
})



// Run Server in port : 5000
app.listen(5000,()=>{
    console.log("Server is working at port 5000");
})


