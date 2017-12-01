const sequelize = require('../../db')

exports.getJob = (req, res) => {
  // Quick example
  // var query = req.body
  sequelize.query("SELECT * FROM job_post limit 1").then(myTableRows => {
    res.send(myTableRows)
  })

  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}
