const Sequelize = require('sequelize')
var db = {}
const path = require('path')
var basename  = path.basename(__filename);
const fs = require('fs')

var sequelize = new Sequelize(process.env.POSTGRES)
module.exports.Sequelize = sequelize;

// var sequelize = new Sequelize('felly','postgres','123kid',{
//
//   host: 'localhost',
//   dialect: 'postgres',
//    pool: {
//      max: 5,
//      min: 0,
//      acquire: 30000,
//      idle: 10000
//    },
//  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
//  operatorsAliases: false
// });

// console.log(path)
// const modules = require('./answer.js')
// const JobPost = require('./job_post')
// console.log("file")
//
// for (var i in files) {
//   // var definition = require('./application/models/' + files[i]).Model;
//   console.log('Model Loaded: ' + i);
// }
// console.log(files)
// const pathy = '/Users/macbookpro/Documents/HackReactor/Opp/src/db/migrations'
// fs.readdirSync(pathy)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//     console.log(file)
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(pathy, file));
//     db[model.name] = model;
//     console.log(file)
//   });
// db.industry.sync()
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
const answer = require('../migrations/answer')
const business_stream = require('../migrations/business_stream')
const company_image = require('../migrations/company_image')
const company = require('../migrations/company')
const education_detail = require('../migrations/education_detail')
const experience_detail = require('../migrations/experience_detail')
const industry = require('../migrations/industry')
const interview = require('../migrations/interview')
const job_location = require('../migrations/job_location')
const job_post_activity = require('../migrations/job_post_activity')
const job_post_skill_set = require('../migrations/job_post_skill_set')
const job_post = require('../migrations/job_post')
const job_type = require('../migrations/job_type')
const message = require('../migrations/message')
const question_type = require('../migrations/question_type')
const question = require('../migrations/question')
const seeker_profile = require('../migrations/seeker_profile')
const seeker_skill_set = require('../migrations/seeker_skill_set')
const skill_set = require('../migrations/skill_set')
const status = require('../migrations/status')
const submission = require('../migrations/submission')
const user_account = require('../migrations/user_account')
const user_content = require('../migrations/user_content')
const user_log = require('../migrations/user_log')
const user_type = require('../migrations/user_type')

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

// console.log(JSON.parse(db.industry))
// db.job_post = job_post;
// module.exports = db;// module.exports.JobPost = JobPost
module.exports.industry = industry;
// const seed = require('../seed')()
