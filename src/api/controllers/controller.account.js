var businessStream = require('../../db/models/index').businessStream;
// var models = require('../../db/migrations')
//
// // const JobPost = require('../../db/models/jobPost').JobPost
exports.getAccount  = (req, res) => {
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
  businessStream.findAll().then((data)=>{
    res.send(data)
  })
}
exports.addAccount = (req,res) => {
  console.log(req.body)
  // var newAccount = businessStream.build({
  //   businessStream_name: 'Math1',
  //   industryIdd: 1
  // });
  // newAccount.save().then(function() {
  //   // Do stuffs after data persists
  // })
}
