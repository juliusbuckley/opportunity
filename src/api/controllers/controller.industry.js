var industry = require('../../db/models/index').industry;
// var models = require('../../db/migrations')
//
// // const JobPost = require('../../db/models/jobPost').JobPost
exports.getIndustryList = (req, res) => {
//   // Quick example
//   // var query = req.body
//   // sequelize.query("SELECT * FROM industry").then(myTableRows => {
//   models.jobPost.findAll().then((users)=>{
//     res.send(users)
//   })
    // res.send("myTableRows")
  // })
  // JobPost.findByPrimary(1)
  //  .then((result)=>{
  //    })
  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}
exports.addIndustry = (req,res) => {
  var newIndustry = industry.build({
  industry_name: 'Math'
});
newIndustry.save().then(function() {
  // Do stuffs after data persists
})
}
