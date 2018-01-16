'use strict';
module.exports = (sequelize, DataTypes) => {
  var job_post_skill_set = sequelize.define('job_post_skill_set', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return job_post_skill_set;
};