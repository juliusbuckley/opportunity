'use strict';

var Router = require('express').Router();
var interviewController = require('../controllers/controller.interview');

Router.get('/job/:jobId/apply', interviewController.getInterview);

Router.post('/job/:jobId/create', interviewController.createInterview);

Router.post('/job/:jobId/edit', interviewController.editInterview);

// Router.post("/businessStream", interviewController.addBusinessStream);

module.exports = Router;