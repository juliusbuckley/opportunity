'use strict';
module.exports = (sequelize, DataTypes) => {
  var skillSet = sequelize.define('skillSet', {
    skillSetName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return skillSet;
};
