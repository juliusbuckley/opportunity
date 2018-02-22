'use strict';

var Router = require("express").Router();
var jobController = require('../controllers/controller.jobpost');

Router.get('/job/:jobId', jobController.getJob);

Router.get('/account/:accountId/jobs/', jobController.getAccountJobs);

module.exports = Router;