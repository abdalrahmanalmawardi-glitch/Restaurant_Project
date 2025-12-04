// Require users model
const UsersModel = require("../models/Users");
const OrdersModel = require("../models/Orders.js");
const { Router } = require("express");


exports.AddOrder = async (req,res)=>{
    const UID = req.session.user
    if (UID) {
        const ID = UID.ID
        
        
        const body = req.body ;
        const Order = body.Orders
        const TheUser = await UsersModel.findById(ID) ;
        
        const TheOrder = await OrdersModel.findOne({
        User : {
            Name : TheUser.Name ,
            Email : TheUser.Email ,
            Password : TheUser.Password ,
        }
        })
        let ROrder = TheOrder.Orders


        if (typeof(Order) == "string") {
            ROrder.push(Order)
        } else {
            for (let index = 0; index < Order.length; index++) {
                
                ROrder.push(Order[index])
            }
        }
 
        
        
        
        await OrdersModel.updateOne({User : {
            Name : TheUser.Name ,
            Email : TheUser.Email ,
            Password : TheUser.Password ,
        }},{Orders : ROrder})

        res.send("Succesfull")
    } else {
        res.send("Pleas Sign in .")
    }
}
exports.Delete = async (req,res)=>{
    const UID = req.session.user
    if (UID) {
        const ID = UID.ID
        const {Order} = req.body ;
        
        const TheUser = await UsersModel.findById(ID) 
        
        const TheOrder = await OrdersModel.findOne({
            User : {
            Name : TheUser.Name ,
            Email : TheUser.Email ,
            Password : TheUser.Password ,
            }
        })       
        const ROrder = TheOrder.Orders

;
        
        if (typeof(Order) == "object") {
            
            for (let index = 0; index < Order.length; index++) {
                const TheIndex = ROrder.indexOf(Order[index])
                if (TheIndex != -1) {
                    ROrder.splice(TheIndex,1)
                }
                
                
            }


            
            

            

            await OrdersModel.updateOne({
            User : {
                Name : TheUser.Name ,
                Email : TheUser.Email ,
                Password : TheUser.Password ,
            }
            },{Orders : ROrder})
            res.send("Succefull")
        } else if (typeof(Order) == "string") {
        const TheIndex = ROrder.indexOf(Order)     
        if (TheIndex != -1) {
            ROrder.splice(TheIndex,1)
        }       
        

        await OrdersModel.updateOne({
            User : {
                Name : TheUser.Name ,
                Email : TheUser.Email ,
                Password : TheUser.Password ,
            }
            },{Orders : ROrder})
            res.send("Succesfull")
        } else {
            res.send("Pleas Inter Array Or String")
        }


    } else {
        res.send("Pleas Sign in .")
    }
}


