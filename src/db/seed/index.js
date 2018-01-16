'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
const sequelize_fixtures = require('sequelize-fixtures');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = require('../models/index')

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
let modules = {
  'industry': db.industry,
  'answer': db.answer,
  'account': db.account,
  'business_stream': db.business_stream,
  'company_image': db.company_image,
  'company': db.company,
  'education_detail': db.education_detail,
  'experience_detail': db.experience_detail,
  'industry': db.industry,
  'interview': db.interview,
  'job_location': db.job_location,
  'job_post_activity': db.job_post_activity,
  'job_post_skill_set': db.job_post_skill_set,
  'job_post': db.job_post,
  'job_type': db.job_type,
  'login': db.login,
  'membership': db.membership,
  'message': db.message,
  'question_type': db.question_type,
  'question': db.question,
  'seeker_profile': db.seeker_profile,
  'seeker_skill_set': db.seeker_skill_set,
  'skill_set': db.skill_set,
  'status': db.status,
  'submission': db.submission,
  'user': db.user,
  'user_content': db.user_content,
  'user_log': db.user_log,
  'user_type': db.user_type
}
// for (const i in modules){
//   console.log(i)
// }
// db.Sequelize.sync()
  // .then(()=>{
// db.industry.sync()
// sequelize_fixtures.loadFile('/Users/macbookpro/Documents/HackReactor/Opp/src/db/seed/'+modules[Object.keys(modules)[0]]+'.json', modules)

  // })
// modules.forEach(module) => {
//   const model = module(sequelize, Sequelize, config)
//   db[model.name] = model
// }
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
