var interview = require('../../db/models/index').interview;
var jobPost = require('../../db/models/index').jobPost;


exports.getInterview  = (req, res) => {
  jobPost.find({id:req.params.jobPost}).then(job => {
    job.getInterview().then(data =>{
      res.send(data)
    })
  })
}
exports.createInterview = (req,res) => {
  console.log(req.body)
  interview.build(req.body).save()
  // account.create(req.body).then((data) =>{
  //   // Do stuffs after data persists
  //   res.send(data)
  // })
}
exports.editInterview = (req,res) => {
  console.log(req.body)
  interview.build(req.body).save()
  // account.create(req.body).then((data) =>{
  //   // Do stuffs after data persists
  //   res.send(data)
  // })
}
