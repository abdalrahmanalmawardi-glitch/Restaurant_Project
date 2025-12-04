//* Require Models
const UsersModel = require("../models/Users");
const OrdersModel = require("../models/Orders.js");

//*     Require path
const path = require("path")


//? Chek If The User Is Admin
exports.ChekIfAdmin = async (req,res,next)=>{
    //    Get User
    const TheUser = req.session.user 
    
    //   Chek if the user sign in
    if (TheUser) {
        // Get User ID
        const UserID = TheUser.ID
        //     Find User By ID
        const User = await UsersModel.findById(UserID)
        //     Get the role of the user
        const Role = User.Role
        // chek if the user is admin
        if (Role == "Admin") {
            next()
        } else {
            
            res.sendFile(path.join(__dirname , "../" , "files" , "Admin-Files" , "Forbidden.html" ))
        }


    } else {
        res.sendFile(path.join(__dirname , "../" , "files" , "Admin-Files" , "Forbidden.html" ))
    }
    

}



//?    Delete All Orders
exports.DeleteAllOrders = async (req,res)=>{
    
    // Get All Orders
    const AllOrders = await OrdersModel.find();
    //       Loop to delet all orders
    for (let index = 0; index < AllOrders.length; index++) {
        // Delet Order
        await OrdersModel.findByIdAndUpdate(AllOrders[index],{Orders : []})
        
    }
    
    res.send("Succesfull")


}

//?    Get All Orders
exports.GetAllOrders = async (req,res)=>{
    // Get All User
    const NOFOrders = await OrdersModel.find()

    const AllOrder = NOFOrders.filter((norder)=>{
        return norder.Orders != ""
    })

    res.send(AllOrder)

}

//?   Get All User
exports.GetAllUsers = async (req,res)=>{
    res.send(await UsersModel.find())
}

//?  Delete an order
exports.DeleteAnOrder = async (req,res)=>{
    const {UPropirte} = req.body
    // Get User
    const RealUser = await OrdersModel.findOne({User : UPropirte})
    if (RealUser) {
        await OrdersModel.deleteOne({User : UPropirte})

        res.send("Successfull")
            
        

    } else {
        res.send(`This User ${UPropirte} , Is not exist`)
    }

}

//? Delete an user
exports.DeleteAnUser = async (req,res)=>{
    const {UName,UPassWord,UEmail} = req.body 
    if (UName && UEmail && UPassWord) {
        
        await UsersModel.deleteOne({Name : UName , Email : UEmail , Password : UPassWord })
        await OrdersModel.deleteOne({User : {Name : UName , Email : UEmail , Password : UPassWord }})
        
        res.send("Succefull")


    } else {
        res.send("Pleas Inter The User Properties")
    }    
    }

//*     SEND ALL ADMIN PAGES

//? send main page
exports.SendMain = (req,res)=>{
    res.sendFile(path.join(__dirname , "../" , "files" , "Admin-Files" , "Home.html" ))
}

