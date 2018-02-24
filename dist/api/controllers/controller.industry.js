'use strict';

var _require = require('../../db/models/index'),
    industry = _require.industry;
// var models = require('../../db/migrations')
//
// // const JobPost = require('../../db/models/jobPost').JobPost


exports.getIndustryList = function (req, res) {
  industry.findAll().then(function (data) {
    res.send(data.map(function (ind) {
      return ind.industryName;
    }));
  });
};
exports.addIndustry = function (req, res) {
  var newIndustry = industry.build({
    industryName: 'Math'
  });
  newIndustry.save().then(function () {
    res.send('added');
  });
};