exports.id = 0;
exports.modules = {

/***/ "./api/controllers/controller.company.js":
/***/ (function(module, exports, __webpack_require__) {

const sequelize = __webpack_require__("./db/index.js")

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


/***/ }),

/***/ "./api/controllers/controller.industry.js":
/***/ (function(module, exports, __webpack_require__) {

const sequelize = __webpack_require__("./db/index.js")

exports.getIndustryList = (req, res) => {
  // Quick example
  // var query = req.body
  sequelize.query("SELECT * FROM industry").then(myTableRows => {
    res.send(myTableRows)
  })

  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}


/***/ }),

/***/ "./api/controllers/controller.jobpost.js":
/***/ (function(module, exports, __webpack_require__) {

const sequelize = __webpack_require__("./db/index.js")

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


/***/ }),

/***/ "./db/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_answer_js__ = __webpack_require__("./db/models/answer.js");
const Sequelize = __webpack_require__("sequelize")
const path = __webpack_require__("path")
const fs = __webpack_require__("fs")
const sequelize = new Sequelize('breemed','postgres','123kid',{

  host: 'localhost',
  dialect: 'postgres',
   pool: {
     max: 5,
     min: 0,
     acquire: 30000,
     idle: 10000
   },
 // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
 operatorsAliases: false
});
// console.log(path)

//
// modules.forEach(module) => {
//   const model = module(sequelize, Sequelize, config)
//   db[model.name] = model
// }
// // ...
// const answer = sequelize.import(path.join('../db/models/answer'))
// const business_stream = sequelize.import('../db/models/business_stream')
// const company_image = sequelize.import('../db/models/company_image')
// const company = sequelize.import('../db/models/company')
// const education_detail = sequelize.import('../db/models/education_detail')
// const experience_detail = sequelize.import('../db/models/experience_detail')
// const industry = sequelize.import('../db/models/industry')
// const interview = sequelize.import('../db/models/interview')
// const job_location = sequelize.import('../db/models/job_location')
// const job_post_activity = sequelize.import('../db/models/job_post_activity')
// const job_post_skill_set = sequelize.import('../db/models/job_post_skill_set')
// const job_post = sequelize.import('../db/models/job_post')
// const job_type = sequelize.import('../db/models/job_type')
// const message = sequelize.import('../db/models/message')
// const question_type = sequelize.import('../db/models/question_type')
// const question = sequelize.import('../db/models/question')
// const seeker_profile = sequelize.import('../db/models/seeker_profile')
// const seeker_skill_set = sequelize.import('../db/models/seeker_skill_set')
// const skill_set = sequelize.import('../db/models/skill_set')
// const status = sequelize.import('../db/models/status')
// const submission = sequelize.import('../db/models/submission')
// const user_account = sequelize.import('../db/models/user_account')
// const user_content = sequelize.import('../db/models/user_content')
// const user_log = sequelize.import('../db/models/user_log')
// const user_type = sequelize.import('../db/models/user_type')
// const seed = require('../seed')()

// Sync all ../db/models that aren't already in the database
//
// sequelize.sync().then(() => {
//   // ok ... everything is nice!
//   console.log('created big fella')
// }).catch(error => {
//   // oooh, did you enter wrong database credentials?
//   console.log('not created big fella'+ error)
//
// })
// sequelize.getQueryInterface().describeTable('company').success( … )
// // => this will result in the structure of a table with all it's attributes and


// => this will result in an array with all existing table names
/* harmony default export */ __webpack_exports__["default"] = (sequelize);


/***/ }),

/***/ "./db/models/answer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* jshint indent: 2 */
const sequelize = __webpack_require__("./db/index.js")
'use strict'
/* unused harmony default export */ var _unused_webpack_default_export = ((sequelize, DataTypes) => {
  console.log('stepping in big fella')
  return sequelize.define('answer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    submission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'submission',
        key: 'id'
      }
    },
    text_answer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    href: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'answer'
  });
});


/***/ }),

/***/ "./db/models/index.js":
false,

/***/ "./server-config.js":
/***/ (function(module, exports, __webpack_require__) {

const app = __webpack_require__("express")()
const webpack = __webpack_require__("webpack");
const webpackConfig = __webpack_require__("./webpack.config.js");
const sequelize = __webpack_require__("./db/index.js");

app.use(__webpack_require__("./api/routers/route.company.js"))

app.use(__webpack_require__("./api/routers/route.jobpost.js"))

app.use(__webpack_require__("./api/routers/route.industry.js"))

app.get('/',function(req,res){
  res.send('Hello World');
})
module.exports = app


/***/ })

};