'use strict';
module.exports = (sequelize, DataTypes) => {
  var interview = sequelize.define('interview', {
    interview_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return interview;
};