const { Router } = require('express')()

const seekerUserController = require('../controllers/controller.seeker-user');

Router.get('/search/u/:userName', seekerUserController.getSeekerUser);

Router.post('/seeker/signup', seekerUserController.addSeekerUser);

module.exports = Router;
