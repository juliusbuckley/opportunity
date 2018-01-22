'use strict';
module.exports = (sequelize, DataTypes) => {
  var jobType = sequelize.define('jobType', {
    jobTypeName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return jobType;
};
