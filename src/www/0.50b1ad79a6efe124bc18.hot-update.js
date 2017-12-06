exports.id = 0;
exports.modules = {

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./db/models/answer.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./db/models/index.js")
'use strict'
module.exports = (sequelize, DataTypes) => {
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
};


/***/ }),

/***/ "./db/models/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answer_js__ = __webpack_require__("./db/models/answer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__answer_js__);
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
module.exports  = sequelize

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

};