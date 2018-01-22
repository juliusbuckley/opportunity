'use strict';
module.exports = (sequelize, DataTypes) => {
  var jobPost = sequelize.define('jobPost', {
    isCompanyNameHidden: DataTypes.BOOLEAN,
    createdDate: DataTypes.DATE,
    jobDescription: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    paymentAmount: DataTypes.INTEGER,
    paymentType: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    tentativeEffortsRequiredInHours: DataTypes.INTEGER,
    jobStatus: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        jobPost.belongsTo(models.interview)
        jobPost.belongsTo(models.jobLocation)
        jobPost.hasMany(models.jobPostSkillSet)
        jobPost.belongsTo(models.jobType)
        jobPost.belongsTo(models.account)
        jobPost.belongsTo(models.membership,{as: 'fromId'})
      }
    }
  });
  return jobPost;
};
