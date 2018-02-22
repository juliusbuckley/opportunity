'use strict';

var _require = require('../../db/models/index'),
    seekerUser = _require.seekerUser;

exports.getSeekerUser = function (req, res) {
  // seeker
  // res.send(seekerUser.build(req.body).getInfo)
  // console.log(req.params.userName)
  seekerUser.find({
    username: req.params.userName
  }).then(function (seeker) {
    res.send(seeker.getInfo());
  });
};
exports.addSeekerUser = function (req, res) {
  // console.log(req.body);
  var seeker = seekerUser.build(req.body);
  seeker.save().then(function () {
    res.send(seeker.getInfo());
  });
};