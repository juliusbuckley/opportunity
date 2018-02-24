'use strict';

var _require = require('../../db/models/index'),
    businessStream = _require.businessStream,
    industry = _require.industry;
// var models = require('../../db/migrations')
//
// // const JobPost = require('../../db/models/jobPost').JobPost


exports.getBusinessStreamByIndustry = function (req, res) {
  industry.find({
    industryName: req.params.industry
  }).then(function (data) {
    data.getBusinessStreams().then(function (streams) {
      res.send(streams.map(function (stream) {
        return {
          streamName: stream.businessStreamName,
          id: stream.id
        };
      }));
    });
  });
};
exports.getBusinessStream = function (req, res) {
  //   // Quick example
  businessStream.findAll().then(function (data) {
    res.send(data);
  });
};

exports.addBusinessStream = function (req, res) {
  var newStream = businessStream.build({
    businessStreamName: 'Math1',
    industryId: 1
  });
  newStream.save().then(function () {
    // Do stuffs after data persists
    res.send('ok');
  });
};