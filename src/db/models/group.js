'use strict';
module.exports = (sequelize, DataTypes) => {
  var group = sequelize.define('group', {
    group_name: DataTypes.STRING,
    plan_level: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return group;
};