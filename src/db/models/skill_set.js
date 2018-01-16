'use strict';
module.exports = (sequelize, DataTypes) => {
  var skill_set = sequelize.define('skill_set', {
    skill_set_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return skill_set;
};