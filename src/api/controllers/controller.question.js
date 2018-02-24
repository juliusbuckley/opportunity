var {
  // interview,
  jobPost,
  question
} = require('../../db/models/index');


exports.getInterview = (req, res) => {
  jobPost.find({
    id: req.params.jobId
  }).then((job) => {
    // console.log(job)
    job.getInterviews().then((data) => {
      res.send(data)
    });
  });
}
exports.createQuestion = (req, res) => {
  // console.log(req.body);
  question.build(req.body).save().
  then((success) => {
    res.send(success);
  }).
  catch((error) => {
    // console.log(error);
    res.send(error);
  });
}
exports.editQuestion = (req, res) => {
  // console.log(req.body);
  question.find({
    id: req.params.jobId
  }).
  then((quest) => {
    res.send(quest);
  });
}
