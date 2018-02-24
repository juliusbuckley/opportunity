var { industry } = require('../../db/models/index');
// var models = require('../../db/migrations')
//
// // const JobPost = require('../../db/models/jobPost').JobPost
exports.getIndustryList = (req, res) => {
  industry.findAll().then((data) => {
    res.send(data.map((ind) => {
      return ind.industryName;
    }))
  })

}
exports.addIndustry = (req, res) => {
  var newIndustry = industry.build({
    industryName: 'Math'
  });
  newIndustry.save().then(function() {
    res.send('added')
  });
}
