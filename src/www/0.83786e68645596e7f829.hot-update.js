exports.id = 0;
exports.modules = {

/***/ "./db/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const Sequelize = __webpack_require__("sequelize")
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
const answer = sequelize.import('models/answer')
const business_stream = sequelize.import(__dirname + 'models/business_stream')
const company_image = sequelize.import(__dirname + 'models/company_image')
const company = sequelize.import(__dirname + 'models/company')
const education_detail = sequelize.import(__dirname + 'models/education_detail')
const experience_detail = sequelize.import(__dirname + 'models/experience_detail')
const industry = sequelize.import(__dirname + 'models/industry')
const interview = sequelize.import(__dirname + 'models/interview')
const job_location = sequelize.import(__dirname + 'models/job_location')
const job_post_activity = sequelize.import(__dirname + 'models/job_post_activity')
const job_post_skill_set = sequelize.import(__dirname + 'models/job_post_skill_set')
const job_post = sequelize.import(__dirname + 'models/job_post')
const job_type = sequelize.import(__dirname + 'models/job_type')
const message = sequelize.import(__dirname + 'models/message')
const question_type = sequelize.import(__dirname + 'models/question_type')
const question = sequelize.import(__dirname + 'models/question')
const seeker_profile = sequelize.import(__dirname + 'models/seeker_profile')
const seeker_skill_set = sequelize.import(__dirname + 'models/seeker_skill_set')
const skill_set = sequelize.import(__dirname + 'models/skill_set')
const status = sequelize.import(__dirname + 'models/status')
const submission = sequelize.import(__dirname + 'models/submission')
const user_account = sequelize.import(__dirname + 'models/user_account')
const user_content = sequelize.import(__dirname + 'models/user_content')
const user_log = sequelize.import(__dirname + 'models/user_log')
const user_type = sequelize.import(__dirname + 'models/user_type')
const seed = __webpack_require__("./db/seed.js")()

// Sync all models that aren't already in the database
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

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ })

};