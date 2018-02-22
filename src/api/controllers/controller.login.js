const { login } = require('../../db/models/index');

exports.getLogin = (req, res) => {
  // Quick example
  // var query = req.body
  login.findAll().then((data) => {
    res.send(data);
  });
}
