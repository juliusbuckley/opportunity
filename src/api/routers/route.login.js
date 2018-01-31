const Router = require("express").Router();
const loginController = require('../controllers/controller.login');

Router.get("/login", loginController.getLogin);

module.exports = Router;
