'use strict';

module.exports = function (sequelize, DataTypes) {
  var skillSet = sequelize.define('skillSet', {
    skillSetName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return skillSet;
};