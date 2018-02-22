'use strict';

var _require = require('../../db/models/index'),
    jobPost = _require.jobPost,
    question = _require.question;

exports.getInterview = function (req, res) {
  jobPost.find({
    id: req.params.jobId
  }).then(function (job) {
    // console.log(job)
    job.getInterviews().then(function (data) {
      res.send(data);
    });
  });
};
exports.createQuestion = function (req, res) {
  // console.log(req.body);
  question.build(req.body).save().then(function (success) {
    res.send(success);
  }).catch(function (error) {
    // console.log(error);
    res.send(error);
  });
};
exports.editQuestion = function (req, res) {
  // console.log(req.body);
  question.find({
    id: req.params.jobId
  }).then(function (quest) {
    res.send(quest);
  });
};