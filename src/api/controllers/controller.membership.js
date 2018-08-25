var {
  membership,
  interview,
  jobPost
} = require('../../db/models/index');


exports.createMembership = (req, res) => {
  membership.findOrCreate({
    where: {
      accountEmailAddress: req.body.accountEmailAddress
    },
    defaults: req.body
  }).spread((user, created) => {
    res.send(user.get({
      plain: true
    }))
    if (created){
      console.log('new membership created')
    } else {
      console.log('fetched membership')
    }

    console.log(user.get({
      plain: true
    }))
  })
}
exports.updateMembership = (req, res) => {
  // console.log(req.body)
  membership.find({
      where: {
        id: req.body.id
      }
    })
    .on('success', function(member) {
      // Check if record exists in db
      if(member) {
        member.updateAttributes({
            title: 'a very different title now'
          })
          .success(function() {})
      }
    })
}
