'use strict';

var _require = require('../../db/models/index'),
    login = _require.login;

exports.getLogin = function (req, res) {
  // Quick example
  // var query = req.body
  login.findAll().then(function (data) {
    res.send(data);
  });
};