const { jobPost, account } = require('../../db/models/index');

exports.getAccountJobs = (req, res) => {

  account.find({
    id: req.params.accountId
  }).then((acc) => {
    acc.getJobPosts().then((data) => {
      console.log(data)
      res.send(data)
    })
  })
}
exports.getJob = (req, res) => {
  jobPost.find({
    id: req.params.jobId
  }).then((job) => {
    res.send(job)
  })
}
