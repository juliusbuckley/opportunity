'use strict';

var _require = require('../../db/models/index'),
    account = _require.account,
    interview = _require.interview,
    jobPost = _require.jobPost;

exports.getInterview = function (req, res) {
  jobPost.find({
    id: req.params.jobPost
  }).then(function (job) {
    job.getInterview().then(function (data) {
      res.send(data);
    });
  });
};
exports.createInterview = function (req, res) {
  // console.log(req.body)
  interview.build(req.body).save();
  account.create(req.body).then(function (data) {
    // Do stuffs after data persists
    res.send(data);
  });
};
exports.editInterview = function (req, res) {
  // console.log(req.body)
  interview.build(req.body).save();
  account.create(req.body).then(function (data) {
    // Do stuffs after data persists
    res.send(data);
  });
};