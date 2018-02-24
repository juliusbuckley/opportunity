'use strict';

var _require = require('../../db/models/index'),
    jobPost = _require.jobPost,
    account = _require.account;

exports.getAccountJobs = function (req, res) {

  account.find({
    id: req.params.accountId
  }).then(function (acc) {
    acc.getJobPosts().then(function (data) {
      // console.log(data)
      res.send(data);
    });
  });
};
exports.getJob = function (req, res) {
  jobPost.find({
    id: req.params.jobId
  }).then(function (job) {
    res.send(job);
  });
};