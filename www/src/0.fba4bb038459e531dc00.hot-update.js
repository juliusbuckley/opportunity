exports.id = 0;
exports.modules = {

/***/ "./src/api/controllers/controller.company.js":
/***/ (function(module, exports, __webpack_require__) {

const sequelize = __webpack_require__("./src/db/models/index.js")

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


/***/ })

};