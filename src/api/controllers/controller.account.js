var account = require('../../db/models/index').account;


exports.getAccount  = (req, res) => {

  account.findAll().then((data)=>{
    res.send(data)
  })
}
exports.addAccount = (req,res) => {
  console.log(req.body)
  res.send(account.build(req.body).getInfo())
  // account.create(req.body).then((data) =>{
  //   // Do stuffs after data persists
  //   res.send(data)
  // })
}
