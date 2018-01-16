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
console.log(db)
db.account.hasOne(db.company_image)
db.account.hasMany(db.job_post,{as:'CompanyJobPost'})
db.account.belongsTo(db.membership)

db.answer.belongsTo(db.question)
db.answer.belongsTo(db.submission)

db.education_detail.belongsTo(db.seeker_user)
db.experience_detail.belongsTo(db.seeker_user)

db.group.belongsTo(db.account,{as:'related_account_id'})

db.job_post.belongsTo(db.job_location)
db.job_post.belongsTo(db.interview)
db.job_post.belongsTo(db.job_post_skill_set)
db.job_post.belongsTo(db.job_type)
db.job_post.belongsTo(db.account)
db.job_post.belongsTo(db.membership,{as: 'from_id'})


db.job_post_skill_set.belongsTo(db.skill_set)
db.job_post_skill_set.belongsTo(db.job_post)

db.interview.belongsTo(db.question)
db.industry.hasMany(db.business_stream)
db.membership.hasMany(db.job_post,{as: 'CreatedJobPosts'})
db.membership.hasOne(db.login, {as: 'related_membership_id'})
db.membership.hasOne(db.company_user)
db.membership.belongsTo(db.account)
// membership.belongsTo(account)

db.account.hasOne(db.membership, {as: 'related_account_id'})
db.group.hasOne(db.membership, {as: 'related_group_id'})
db.seeker_user.hasOne(db.membership, {as: 'related_seeker_id'})
db.message.belongsTo(db.job_post)

db.membership.hasOne(db.message, {as: 'from_id'})

// question.hasMany(answer)
db.question.belongsTo(db.account)
db.question.belongsTo(db.job_post)
db.question_order.belongsTo(db.question)

db.seeker_skill_set.belongsTo(db.seeker_user)
db.seeker_skill_set.belongsTo(db.skill_set)
db.seeker_skill_set.belongsTo(db.skill_set)

db.seeker_user.belongsTo(db.membership)
db.seeker_user.belongsTo(db.membership)

db.submission.belongsTo(db.job_post)
db.submission.belongsTo(db.status)
db.submission.belongsTo(db.account)
db.seeker_user.hasMany(db.submission,{as: 'Submissions'})

// account.belongsTo(membership)
db.question.hasOne(db.question_type)
db.question.belongsTo(db.question_type)

// console.log(db.)
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
