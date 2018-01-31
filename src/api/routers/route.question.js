const Router = require("express").Router();
const questionController = require('../controllers/controller.question');

// Router.get("/job/:jobId/apply", questionController.getQuestion);

Router.post("/question/create", questionController.createQuestion);
Router.post("/question/edit/:jobId/:questionId", questionController.editQuestion);

// Router.post("/businessStream", interviewController.addBusinessStream);

module.exports = Router;
