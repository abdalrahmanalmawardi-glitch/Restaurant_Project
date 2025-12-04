const mongoose = require("mongoose")

const OrdersSchema = new mongoose.Schema({
    Orders : {
        type : Array ,
        default : [] ,
    } ,
    User : {
        type : Object,
        required : true ,
        default : {Name : "",Email : "",Password : ""}
    }
})

const OrdersCollection = mongoose.model("Orders" , OrdersSchema , "OrdersCollection");

module.exports = OrdersCollection;
