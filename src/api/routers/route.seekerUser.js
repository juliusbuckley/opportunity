const Router = require('express').Router()
// Rouunt.Router();
const seekerUserController = require('../controllers/controller.seeker-user');

Router.get('/s/user/:seekerUserId', seekerUserController.getSeekerUser);

// Router.post('/seeker/signup', seekerUserController.createSeekerProfile);
Router.post('/s/create', seekerUserController.fetchOrCreateSeekerProfile);

module.exports = Router;
