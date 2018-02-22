var {
  businessStream,
  industry
} = require('../../db/models/index');
// var models = require('../../db/migrations')
//
// // const JobPost = require('../../db/models/jobPost').JobPost
exports.getBusinessStreamByIndustry = (req, res) => {
  industry.find({
    industryName: req.params.industry
  }).then((data) => {
    data.getBusinessStreams().then((streams) => {
      res.send(streams.map((stream) => {
        return {
          streamName: stream.businessStreamName,
          id: stream.id
        }
      }));
    })
  })
}
exports.getBusinessStream = (req, res) => {
  //   // Quick example
  businessStream.findAll().then((data) => {
    res.send(data)
  })
}

exports.addBusinessStream = (req, res) => {
  var newStream = businessStream.build({
    businessStreamName: 'Math1',
    industryId: 1
  });
  newStream.save().then(function() {
    // Do stuffs after data persists
    res.send('ok')
  })
}
