exports.id = 0;
exports.modules = {

/***/ "./api/controllers/controller.industry.js":
/***/ (function(module, exports, __webpack_require__) {

var db = __webpack_require__("./db/index.js"),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;
const JobPost = __webpack_require__("./db/models/job_post.js").JobPost
exports.getIndustryList = (req, res) => {
  // Quick example
  // var query = req.body
  // sequelize.query("SELECT * FROM industry").then(myTableRows => {
    res.send("myTableRows")
  // })
  // JobPost.findByPrimary(1)
  //  .then((result)=>{
  //    })
  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}


/***/ })

};