exports.id = 0;
exports.modules = {

/***/ "./api/controllers/controller.jobpost.js":
/***/ (function(module, exports, __webpack_require__) {

// const sequelize = require('../../db/index')
const sequelize = __webpack_require__("sequelize");
const JobPost = __webpack_require__("./db/models/job_post.js").JobPost
exports.getJob = (req, res) => {
  // Quick example
  // var query = req.body
  // sequelize.on("SELECT * FROM job_post").then(myTableRows => {
  //   res.send(myTableRows)
  // }).catch((err) => {
  //   console.log(err)
  // })
  

  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}


/***/ })

};