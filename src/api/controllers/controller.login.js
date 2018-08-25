const { login } = require('../../db/models/index');
const passport = require('passport')
const axios = require('axios')
var {
  membership, seekerUser
} = require('../../db/models/index');

exports.getLogin = (req, res) => {
    // membership.findOrCreate({where: {accountEmailAddress: req.body.accountEmailAddress}})
    // findOrCreate
    console.log(req.url)
    res.redirect('/');
  }
