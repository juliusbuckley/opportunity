var {
  businessStream,
  industry
} = require('../../db/models/index');


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
      }))
    })
  })
}
exports.getBusinessStream = (req, res) => {
  res.send('data');
}

exports.addBusinessStream = (req, res) => {
  var newStream = businessStream.build({
    businessStreamName: 'Math1',
    industryId: 1
  });
  newStream.save().then(function() {
    // Do stuffs after data persists
  })
}
