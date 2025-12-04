// Import Mongoose
const mongoose = require("mongoose")

// Create Schema 
const UserSchema = new mongoose.Schema({
    Name : {
        type : String ,
        trim : true ,
        required : true ,
    } , 
    Email : {
        type : String ,
        trim : true ,
        required : true ,
    } , 
    Password : {
        type : String , 
        required : true ,
        min : 8 ,
    } ,
    Role : {
        type : "string" ,
        enum : ["Admin","User"],
        default : "User" ,
    } 
})

const UserCollection = mongoose.model("Users" , UserSchema , "UsersCollection");

module.exports = UserCollection; 
