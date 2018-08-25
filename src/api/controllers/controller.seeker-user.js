var {
  seekerUser
} = require('../../db/models/index');


exports.getSeekerUser = (req, res) => {
  // seeker
  // res.send(seekerUser.build(req.body).getInfo)
  // console.log(req)
  seekerUser.find({
    where: {
      id: req.params.seekerUserId
    }
  }).then((seeker) => {
    res.send(seeker.data)
  })
}
exports.fetchOrCreateSeekerProfile = (req, res) => {
  console.log('fetchOrCreateSeekerProfile');
  console.log(req.body)
  seekerUser.findOrCreate({
    where: {
      id: req.body.seekerUserId
    },
    defaults: {
      firstName: '',
      lastName: '',
      userName: '',
      membershipId: req.body.id,
      gender: '',
      isActive: true,
      smsNotificationActive: true,
      emailNotificationActive: true,
      userImage: '',
      twitterHandle: '',
      instragramHandle: '',
      websiteUrl: '',
      facebookUrl: ''
    }
  }).spread((seek,created)=>{
    if (created){
        console.log('new seeker created')
      } else {
        console.log('fetched seeker')
      }
    res.send(seek.get({
      plain: true
    }))
  })
    // seeker.updateAttributes(req.body.seeker).then((data) =>{
    //   res.send(data.data)
    //   // console.log(data.data)
    // })
}
exports.createSeekerProfile = (req, res) => {
  console.log('createSeekerProfile');
  var seekerData = req.body.seeker
  seekerData.createdAt = new Date();
  seekerData.updatedAt = new Date();
  console.log (seekerData);
  var seeker = seekerUser.build(seekerData).save(member => {
    res.send(member)
  })
}
