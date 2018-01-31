const { login } = require('../../db/models/index')

exports.getLogin = (req, res) => {
  login.findAll().then((data) => {
    res.send(data)
  })
}
