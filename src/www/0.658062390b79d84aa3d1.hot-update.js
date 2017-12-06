exports.id = 0;
exports.modules = {

/***/ "./api/controllers/controller.jobpost.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db_index__ = __webpack_require__("./db/index.js");

const Sequelize = __webpack_require__("sequelize");

exports.getJob = (req, res) => {
  // Quick example
  // var query = req.body
  __WEBPACK_IMPORTED_MODULE_0__db_index__["default"].query("SELECT * FROM job_post limit 1").then(myTableRows => {
    res.send(myTableRows)
  })

  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}


/***/ })

};