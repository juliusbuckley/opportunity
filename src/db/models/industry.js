'use strict';
module.exports = (sequelize, DataTypes) => {
  var industry = sequelize.define('industry', {
    industry_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return industry;
};