var {
  seekerUser
} = require('../../db/models/index');


exports.getSeekerUser = (req, res) => {
  console.log(req.params.userName)
  seekerUser.find({
    username: req.params.userName
  }).then((seeker) => {
    res.send(seeker.getInfo())
  })
}
exports.addSeekerUser = (req, res) => {
  console.log(req.body)
  const seeker = seekerUser.build(req.body)
  seeker.save().then(() => {
    res.send(seeker.getInfo())
  })
}
