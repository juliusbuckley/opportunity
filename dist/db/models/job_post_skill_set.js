'use strict';

module.exports = function (sequelize, DataTypes) {
  var jobPostSkillSet = sequelize.define('jobPostSkillSet', {}, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        jobPostSkillSet.belongsTo(models.skillSet, { allowNull: false });
        // jobPostSkillSet.belongsTo(models.jobPost)
      }
    }
  });
  return jobPostSkillSet;
};