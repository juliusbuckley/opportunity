exports.id = 0;
exports.modules = {

/***/ "./api/controllers/controller.industry.js":
/***/ (function(module, exports, __webpack_require__) {

const sequelize = __webpack_require__("./db/index.js")
const JobPost = __webpack_require__("./db/models/job_post.js").JobPost
exports.getIndustryList = (req, res) => {
  // Quick example
  // var query = req.body
  // sequelize.query("SELECT * FROM industry").then(myTableRows => {
    res.send("myTableRows")
  // })

  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}


/***/ })

};