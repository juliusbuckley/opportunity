exports.id = 0;
exports.modules = {

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
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
// console.log(db)
//
// modules.forEach(module) => {
//   const model = module(sequelize, Sequelize, config)
//   db[model.name] = model
// }
// // ...
const answer = __webpack_require__("./db/models/answer.js")
const business_stream = __webpack_require__("./db/models/business_stream.js")
const company_image = __webpack_require__("./db/models/company_image.js")
const company = __webpack_require__("./db/models/company.js")
const education_detail = __webpack_require__("./db/models/education_detail.js")
const experience_detail = __webpack_require__("./db/models/experience_detail.js")
const industry = __webpack_require__("./db/models/industry.js")
const interview = __webpack_require__("./db/models/interview.js")
const job_location = __webpack_require__("./db/models/job_location.js")
const job_post_activity = __webpack_require__("./db/models/job_post_activity.js")
const job_post_skill_set = __webpack_require__("./db/models/job_post_skill_set.js")
const job_post = __webpack_require__("./db/models/job_post.js")
const job_type = __webpack_require__("./db/models/job_type.js")
const message = __webpack_require__("./db/models/message.js")
const question_type = __webpack_require__("./db/models/question_type.js")
const question = __webpack_require__("./db/models/question.js")
const seeker_profile = __webpack_require__("./db/models/seeker_profile.js")
const seeker_skill_set = __webpack_require__("./db/models/seeker_skill_set.js")
const skill_set = __webpack_require__("./db/models/skill_set.js")
const status = __webpack_require__("./db/models/status.js")
const submission = __webpack_require__("./db/models/submission.js")
const user_account = __webpack_require__("./db/models/user_account.js")
const user_content = __webpack_require__("./db/models/user_content.js")
const user_log = __webpack_require__("./db/models/user_log.js")
const user_type = __webpack_require__("./db/models/user_type.js")
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

/***/ })

};