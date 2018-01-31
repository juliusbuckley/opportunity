var {
  interview,
  jobPost
  // question
} = require('../../db/models/index');
// var jobPost = require('../../db/models/index').jobPost;
// var question = require('../../db/models/index').question;


exports.getInterview = (req, res) => {
  jobPost.find({
    id: req.params.jobId
  }).
  then((job) => {
    job.getQuestions().then((data) => {
      res.send(data.sort((curr, next) => {
        return curr.interview.order - next.interview.order
      }))
    })
  })
}
exports.addToInterview = (req, res) => {
  jobPost.build(req.body.jobPost).
  addQuestion(req.body.question).
  then((success) => {
    console.log(success)
    res.send(success)
  })
}
exports.createInterview = (req, res) => {
  console.log(req.body)
  interview.build(req.body).save();
}
exports.editInterview = (req, res) => {
  console.log(req.body)
  interview.build(req.body).save()
}
