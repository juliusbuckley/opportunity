'use strict';

var _require = require('../../db/models/index'),
    account = _require.account;

exports.getAccount = function (req, res) {

  account.findAll().then(function (data) {
    res.send(data);
  });
};
exports.addAccount = function (req, res) {
  // console.log(req.body)
  res.send(account.build(req.body).getInfo());
  // account.create(req.body).then((data) =>{
  //   // Do stuffs after data persists
  //   res.send(data)
  // })
};