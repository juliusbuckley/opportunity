exports.id = 0;
exports.modules = {

/***/ "./api/controllers/controller.industry.js":
/***/ (function(module, exports, __webpack_require__) {

var db = __webpack_require__("./db/models/index.js"),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;
// var models = require('../../db/migrations')
//
// // const JobPost = require('../../db/models/job_post').JobPost
// exports.getIndustryList = (req, res) => {
//   // Quick example
//   // var query = req.body
//   // sequelize.query("SELECT * FROM industry").then(myTableRows => {
//   models.job_post.findAll().then((users)=>{
//     res.send(users)
//   })
    // res.send("myTableRows")
  // })
  // JobPost.findByPrimary(1)
  //  .then((result)=>{
  //    })
  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
// }


/***/ }),

/***/ "./api/controllers/controller.jobpost.js":
/***/ (function(module, exports, __webpack_require__) {

// const sequelize = require('../../db/index')
var db = __webpack_require__("./db/models/index.js"),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;
const JobPost = __webpack_require__("./db/migrations/job_post.js").JobPost
exports.getJob = (req, res) => {
  // Quick example
  // var query = req.body
  // sequelize.on("SELECT * FROM job_post").then(myTableRows => {
    // res.send("myTableRows")
  // }).catch((err) => {
  //   console.log(err)
  // })
  JobPost.findAll()
    .then((result)=>{
      res.send(result)
      })

      // console.log("result")
  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}


/***/ }),

/***/ "./db/migrations/job_post.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint indent: 2 */


module.exports = function(sequelize, DataTypes) {
  var JobPost = sequelize.define('job_post', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    posted_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    job_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_type',
        key: 'id'
      }
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    is_company_name_hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_location',
        key: 'id'
      }
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    payment_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tentative_efforts_required_in_hours: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interview_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'job_post'
  });
  return JobPost;
};


/***/ }),

/***/ "./db/models/answer.js":
false,

/***/ "./db/models/business_stream.js":
false,

/***/ "./db/models/company.js":
false,

/***/ "./db/models/company_image.js":
false,

/***/ "./db/models/education_detail.js":
false,

/***/ "./db/models/experience_detail.js":
false,

/***/ "./db/models/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__filename) {const Sequelize = __webpack_require__("sequelize")
var db = {}
const path = __webpack_require__("path")
var basename  = path.basename(__filename);
const fs = __webpack_require__("fs")
var sequelize = new Sequelize('homie','postgres','123kid',{

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
// const modules = require('./answer.js')
// const JobPost = require('./job_post')
// console.log("file")
//
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//     console.log(file)
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });
//   console.log("file")
//
// // console.log(__dirname)
//
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
console.log(db)
// 
// modules.forEach(module) => {
//   const model = module(sequelize, Sequelize, config)
//   db[model.name] = model
// }
// // ...
// const answer = require('./answer')
// const business_stream = require('./business_stream')
// const company_image = require('./company_image')
// const company = require('./company')
// const education_detail = require('./education_detail')
// const experience_detail = require('./experience_detail')
// const industry = require('./industry')
// const interview = require('./interview')
// const job_location = require('./job_location')
// const job_post_activity = require('./job_post_activity')
// const job_post_skill_set = require('./job_post_skill_set')
// const job_post = require('./job_post')
// const job_type = require('./job_type')
// const message = require('./message')
// const question_type = require('./question_type')
// const question = require('./question')
// const seeker_profile = require('./seeker_profile')
// const seeker_skill_set = require('./seeker_skill_set')
// const skill_set = require('./skill_set')
// const status = require('./status')
// const submission = require('./submission')
// const user_account = require('./user_account')
// const user_content = require('./user_content')
// const user_log = require('./user_log')
// const user_type = require('./user_type')
// const seed = require('../seed')()

// Sync all ../db/models that aren't already in the database

sequelize.sync().then(() => {
  // ok ... everything is nice!
  console.log('created big fella')
}).catch(error => {
  // oooh, did you enter wrong database credentials?
  console.log('not created big fella'+ error)

})
// sequelize.getQueryInterface().describeTable('company').success( … )
// => this will result in the structure of a table with all it's attributes and
// JobPost().findAll()
//  .then((result)=>{
//    console.log(result)
//    })

// => this will result in an array with all existing table names
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db.industry = industry;
// db.job_post = job_post;
module.exports = db;// module.exports.JobPost = JobPost

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),

/***/ "./db/models/industry.js":
false,

/***/ "./db/models/interview.js":
false,

/***/ "./db/models/job_location.js":
false,

/***/ "./db/models/job_post.js":
false,

/***/ "./db/models/job_post_activity.js":
false,

/***/ "./db/models/job_post_skill_set.js":
false,

/***/ "./db/models/job_type.js":
false,

/***/ "./db/models/message.js":
false,

/***/ "./db/models/question.js":
false,

/***/ "./db/models/question_type.js":
false,

/***/ "./db/models/seeker_profile.js":
false,

/***/ "./db/models/seeker_skill_set.js":
false,

/***/ "./db/models/skill_set.js":
false,

/***/ "./db/models/status.js":
false,

/***/ "./db/models/submission.js":
false,

/***/ "./db/models/user_account.js":
false,

/***/ "./db/models/user_content.js":
false,

/***/ "./db/models/user_log.js":
false,

/***/ "./db/models/user_type.js":
false

};