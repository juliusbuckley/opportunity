const sequelize = require('../../db/models/index')

exports.getCompany = (req, res) => {
  // Quick example
  // var query = req.body
  sequelize.query("SELECT * FROM company").then(myTableRows => {
    res.send(myTableRows)
  })

  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}
