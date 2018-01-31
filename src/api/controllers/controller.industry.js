var industry = require('../../db/models/index').industry;
// var models = require('../../db/migrations')
//
// // const JobPost = require('../../db/models/jobPost').JobPost
exports.getIndustryList = (req, res) => {
  var list = []
  industry.findAll().then( data => {
      res.send(data.map(ind => {
        return ind.industryName
      }))
      // list.push(data.industryN)
  })

}
exports.addIndustry = (req,res) => {
  var newIndustry = industry.build({
  industry_name: 'Math'
});
newIndustry.save().then(function() {
  // Do stuffs after data persists
})
}
