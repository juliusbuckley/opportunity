'use strict';

var Router = require('express').Router();
// Rouunt.Router();
var seekerUserController = require('../controllers/controller.seeker-user');

Router.get('/search/u/:userName', seekerUserController.getSeekerUser);

Router.post('/seeker/signup', seekerUserController.addSeekerUser);

module.exports = Router;