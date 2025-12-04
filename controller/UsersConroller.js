// Require users model
const UsersModel = require("../models/Users");
const OrdersModel = require("../models/Orders.js");




exports.AddNewAccount = async (req,res)=>{
    const {UName,UEmail,UPassword} = req.body
    const Existe = await UsersModel.findOne({
        Name : UName ,
        Email : UEmail ,
        Password : UPassword
    })
    if (Existe) {
        res.send("This User is exist")
    } else {
        await UsersModel.create({
        Name : UName ,
        Email : UEmail ,
        Password : UPassword ,
        })
    await OrdersModel.create({
        User : {
        Name : UName ,
        Email : UEmail ,
        Password : UPassword ,
        }
    })
    
    res.send("Succesfull")
    }
}



exports.DeleteUser = async (req,res)=>{
    const {UName,UEmail,UPassword} = req.body
    await UsersModel.deleteOne({
        Name : UName ,
        Email : UEmail ,
        Password : UPassword ,
    })
    await OrdersModel.deleteOne({User : {
        Name : UName ,
        Email : UEmail ,
        Password : UPassword ,
    }})
    res.send("Succesfull")
}

exports.SignIn = async (req,res)=>{

    const {UName,UEmail,UPassword} = req.body

    if (req.session.user) {
        req.session.destroy(async (err)=>{
        
            if (err) {
                res.send("Pleas try again")
            } else {
                await res.clearCookie("connect.sid")
                
            }
        })
        
        const TRealUser = await UsersModel.findOne({
            Name : UName ,
            Email : UEmail ,
            Password : UPassword ,
        })
        if (TRealUser) {
            req.session =  {ID : TRealUser._id} ;
            res.send("Succesfull") ;
        } else {
            res.send("Pleas Enter A true value")
        }               
    } else {
        
        const RealUser = await UsersModel.findOne({
        Name : UName ,
        Email : UEmail ,
        Password : UPassword ,
        })
        if (RealUser) {
            
            req.session.user = {ID : RealUser._id}
            res.send("Succesfull")
        } else {
            res.send("Pleas Enter A true value")
        }
    }
}

exports.LogOut = async (req,res)=>{
    const TheSession = req.session.user
    if (!TheSession) {
        res.send("You are not sign in")
    } else {        
        req.session.destroy(err=>{
            if (err) {
                res.send(err)
            }
            res.clearCookie("connect.sid")
            res.send("Succesfull")
        })
    }
}
