'use strict';
module.exports = (sequelize, DataTypes) => {
  var jobPostSkillSet = sequelize.define('jobPostSkillSet', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        jobPostSkillSet.belongsTo(models.skillSet)
        // jobPostSkillSet.belongsTo(models.jobPost)
      }
    }
  });
  return jobPostSkillSet;
};
