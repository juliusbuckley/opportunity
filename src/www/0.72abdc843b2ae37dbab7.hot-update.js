exports.id = 0;
exports.modules = {

/***/ "./db/models/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__filename, __dirname) {const Sequelize = __webpack_require__("sequelize")
var db = {}
const path = __webpack_require__("path")
var basename  = path.basename(__filename);
const fs = __webpack_require__("fs")
var sequelize = new Sequelize('fella','postgres','123kid',{

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
const files = fs.readdirSync(__dirname)
for (var i in files) {
  // var definition = require('./application/models/' + files[i]).Model;
  console.log('Model Loaded: ' + i);
}
  // .filter(file => {
  //   return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  //   console.log(file)
  // })
  // .forEach(file => {
  //   var model = sequelize['import'](path.join(__dirname, file));
  //   db[model.name] = model;
  //   console.log("file")
  // });

// console.log(__dirname)

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

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js", "/"))

/***/ })

};