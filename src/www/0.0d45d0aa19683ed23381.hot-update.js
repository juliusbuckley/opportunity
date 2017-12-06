exports.id = 0;
exports.modules = {

/***/ "./api/controllers/controller.jobpost.js":
/***/ (function(module, exports, __webpack_require__) {

const {sequelize} = __webpack_require__("./db/index.js")
const Sequelize = __webpack_require__("sequelize");

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


/***/ })

};