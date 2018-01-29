var businessStream = require('../../db/models/index').businessStream;
// var models = require('../../db/migrations')
//
// // const JobPost = require('../../db/models/jobPost').JobPost
exports.getBusinessStream  = (req, res) => {
//   // Quick example
  businessStream.findAll().then((data)=>{
    res.send(data)
  })
}
exports.addBusinessStream = (req,res) => {
  var newStream = businessStream.build({
    businessStreamName: 'Math1',
    industryId: 1
  });
  newStream.save().then(function() {
    // Do stuffs after data persists
  })
}
