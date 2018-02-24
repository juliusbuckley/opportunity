'use strict';

module.exports = function (sequelize, DataTypes) {
  var jobPost = sequelize.define('jobPost', {
    jobTitle: DataTypes.STRING,
    isCompanyNameHidden: DataTypes.BOOLEAN,
    createdDate: DataTypes.DATE,
    jobDescription: DataTypes.STRING,
    jobType: DataTypes.ENUM('Gig', 'Temporary', 'Full-Time'),
    isPublished: DataTypes.BOOLEAN,
    paymentAmount: DataTypes.INTEGER,
    paymentType: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    visibility: DataTypes.ENUM('Public', 'Private'),
    tentativeEffortsRequiredInHours: DataTypes.INTEGER,
    jobStatus: DataTypes.ENUM('Created', 'Pending Approval', 'Approved', 'Sourcing', 'Interview', 'Offer', 'Filled', 'Cancelled')
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        // jobPost.belongsTo(models.interview,{allowNull: true})
        jobPost.belongsTo(models.jobLocation, { allowNull: false });
        jobPost.hasMany(models.jobPostSkillSet, { allowNull: false });
        jobPost.belongsTo(models.industry, { allowNull: false });
        jobPost.belongsTo(models.account, { allowNull: false });
        jobPost.belongsTo(models.membership, { as: 'from', allowNull: false });
        jobPost.belongsToMany(models.question, { through: models.interview });
      }
    }
  });
  return jobPost;
};