exports.id = 0;
exports.modules = {

/***/ "./db/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const Sequelize = __webpack_require__("sequelize")
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

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach((file) => {
        const model = sequelize.import(path.join('../', file));
        db[model.name] = model;
    });

    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
// ...
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
const seed = __webpack_require__("./db/seed.js")()

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

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ })

};