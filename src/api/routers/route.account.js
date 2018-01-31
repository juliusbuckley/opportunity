const { Router } = require('express')()
const accountController = require('../controllers/controller.account');

Router.get('/account', accountController.getAccount);

Router.post('/account', accountController.addAccount);

module.exports = Router;
