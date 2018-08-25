const Router = require('express').Router();
const membershipController = require('../controllers/controller.membership');

// Router.get('/account', accountController.getAccount);

Router.post('/m', membershipController.createMembership);
Router.put('/m', membershipController.updateMembership);

module.exports = Router;
