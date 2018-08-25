const Router = require('express').Router();
const loginController = require('../controllers/controller.login');


Router.get('/api', loginController.getLogin);
module.exports = Router;
