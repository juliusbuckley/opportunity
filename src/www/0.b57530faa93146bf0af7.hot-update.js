exports.id = 0;
exports.modules = {

/***/ "./db/models/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__filename, __dirname) {const Sequelize = __webpack_require__("sequelize")
var db = {}
const path = __webpack_require__("path")
var basename  = path.basename(__filename);
const fs = __webpack_require__("fs")
var sequelize = new Sequelize('Oppy','postgres','123kid',{

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

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

// console.log(__dirname)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// console.log("modules")
//
// modules.forEach(module) => {
//   const model = module(sequelize, Sequelize, config)
//   db[model.name] = model
// }
// // ...
// const answer = sequelize.import(path.join('./answer'))
// const business_stream = sequelize.import('./business_stream')
// const company_image = sequelize.import('./company_image')
// const company = sequelize.import('./company')
// const education_detail = sequelize.import('./education_detail')
// const experience_detail = sequelize.import('./experience_detail')
// const industry = sequelize.import('./industry')
// const interview = sequelize.import('./interview')
// const job_location = sequelize.import('./job_location')
// const job_post_activity = sequelize.import('./job_post_activity')
// const job_post_skill_set = sequelize.import('./job_post_skill_set')
// const job_post = sequelize.import('./job_post')
// const job_type = sequelize.import('./job_type')
// const message = sequelize.import('./message')
// const question_type = sequelize.import('./question_type')
// const question = sequelize.import('./question')
// const seeker_profile = sequelize.import('./seeker_profile')
// const seeker_skill_set = sequelize.import('./seeker_skill_set')
// const skill_set = sequelize.import('./skill_set')
// const status = sequelize.import('./status')
// const submission = sequelize.import('./submission')
// const user_account = sequelize.import('./user_account')
// const user_content = sequelize.import('./user_content')
// const user_log = sequelize.import('./user_log')
// const user_type = sequelize.import('./user_type')
// const seed = require('../seed')()

// Sync all ../db/models that aren't already in the database

// sequelize.sync().then(() => {
//   // ok ... everything is nice!
//   console.log('created big fella')
// }).catch(error => {
//   // oooh, did you enter wrong database credentials?
//   console.log('not created big fella'+ error)
//
// })
// sequelize.getQueryInterface().describeTable('company').success( … )
// => this will result in the structure of a table with all it's attributes and
// JobPost().findAll()
//  .then((result)=>{
//    console.log(result)
//    })

// => this will result in an array with all existing table names
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.industry = industry;
db.job_post = job_post;
module.exports = db;// module.exports.JobPost = JobPost

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js", "/"))

/***/ })

};