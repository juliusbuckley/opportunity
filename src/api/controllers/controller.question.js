var {
  // interview,
  jobPost,
  question
} = require('../../db/models/index');

exports.getInterview = (req, res) => {
  jobPost.findAll().then((job) => {
    console.log(job)
    job.getQuestions().then(data => {
      res.send(job)
    })
  })
}
exports.createQuestion = (req, res) => {
  console.log(req.body)
  question.build(req.body).save().
  then((success) => {
    res.send(success)
  }).
  catch((error) => {
    console.log(error);
    res.send(error)
  })
}
exports.editQuestion = (req, res) => {
  console.log(req.body)
  question.find({
    id: req.params.jobId
  }).then((quest) => {
    res.send(question)
  })
}
