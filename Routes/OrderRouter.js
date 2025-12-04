const express = require("express");
const Router = express.Router()
const Controller = require("../controller/OrderController")

Router.post("/AddNewOrder",Controller.AddOrder)
Router.post("/Delete",Controller.Delete)


module.exports = Router