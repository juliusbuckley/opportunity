'use strict';

var Router = require('express').Router();
var accountController = require('../controllers/controller.account');

Router.get('/account', accountController.getAccount);

Router.post('/account', accountController.addAccount);

module.exports = Router;