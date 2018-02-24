'use strict';

var Router = require('express').Router();
var loginController = require('../controllers/controller.login');

Router.get('/login', loginController.getLogin);

module.exports = Router;