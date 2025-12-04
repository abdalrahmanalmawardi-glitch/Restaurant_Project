const express = require("express");
const Router = express.Router()
const Controller = require("../controller/AdminController")
const path = require("path")


Router.use(Controller.ChekIfAdmin)

//todo       All Post Requests
Router.post("/Delete/All",Controller.DeleteAllOrders)
Router.post("/Get/Orders",Controller.GetAllOrders)
Router.post("/Get/Users",Controller.GetAllUsers)
Router.post("/Delete/AnOrder",Controller.DeleteAnOrder)
Router.post("/Delete/AnUser",Controller.DeleteAnUser)




//todo      All Admin Pages
Router.all("/",Controller.SendMain)

module.exports = Router;