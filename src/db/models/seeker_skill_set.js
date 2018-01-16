'use strict';
module.exports = (sequelize, DataTypes) => {
  var seeker_skill_set = sequelize.define('seeker_skill_set', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return seeker_skill_set;
};