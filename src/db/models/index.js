'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       =  'development' || process.env.POSTGRES;
var config    = require(__dirname + '/../config/config.json')
var db        = {};

var sequelize = new Sequelize(process.env.POSTGRES, config.production);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join('../../src/db/models/'+file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db.group.belongsTo(db.account,{as:'related_account'})
// db.group.hasMany(db.membership, {as: 'related_group'})
// db.account.hasMany(db.companyImage)
// db.account.hasMany(db.jobPost)
// db.account.hasMany(db.membership)
// db.account.hasOne(db.membership, {as: 'related_account_id'})
// db.answer.belongsTo(db.question)
// db.answer.belongsTo(db.submission)
// db.educationDetail.belongsTo(db.seekerUser)
// db.experienceDetail.belongsTo(db.seekerUser)
// db.industry.hasMany(db.businessStream)
// db.interview.hasMany(db.question)
// db.jobPostSkillSet.belongsTo(db.skillSet)
// // db.jobPostSkillSet.belongsTo(db.jobPost)
// db.jobPost.belongsTo(db.interview)
// db.jobPost.belongsTo(db.jobLocation)
// db.jobPost.hasMany(db.jobPostSkillSet)
// db.jobPost.belongsTo(db.jobType)
// db.jobPost.belongsTo(db.account)
// db.jobPost.belongsTo(db.membership,{as: 'from_id'})
// db.membership.hasMany(db.jobPost,{as: 'CreatedJobPosts'})
// db.membership.hasOne(db.companyUser)
// db.membership.belongsTo(db.account)
// db.membership.hasOne(db.message, {as: 'from_id'})
// db.message.belongsTo(db.jobPost)
// db.questionOrder.belongsTo(db.question)
// db.question.belongsTo(db.account)
// db.question.belongsTo(db.jobPost)
// db.question.belongsTo(db.questionType)
// db.seekerSkillSet.belongsTo(db.seekerUser)
// db.seekerSkillSet.belongsTo(db.skillSet)
// db.seekerSkillSet.belongsTo(db.skillSet)
// db.seekerUser.hasOne(db.membership, {as: 'related_seeker_id'})
// // db.seekerUser.belongshTo(db.membership)
// db.seekerUser.hasMany(db.submission,{as: 'Submissions'})
// db.submission.belongsTo(db.jobPost)
// db.submission.belongsTo(db.status)
// db.submission.belongsTo(db.account)


db.sequelize.sync().then(()=>{
  console.log('done big fella')
  // console.log()

}).catch((err)=>{
  console.log('failed big fella' + err)
})

// console.log(db)

module.exports = db;
