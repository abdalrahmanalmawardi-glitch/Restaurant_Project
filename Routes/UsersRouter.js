const express = require("express");
const Router = express.Router()
const Controller = require("../controller/UsersConroller")

Router.post("/AddNewAccount",Controller.AddNewAccount)
Router.post("/Delete",Controller.DeleteUser)
Router.post("/SignIn",Controller.SignIn)
Router.post("/LogOut",Controller.LogOut)


module.exports = Router;