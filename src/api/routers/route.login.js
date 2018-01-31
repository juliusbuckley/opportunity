const { Router } = require('express')()
const loginController = require('../controllers/controller.login');

Router.get('/login', loginController.getLogin);

module.exports = Router;
