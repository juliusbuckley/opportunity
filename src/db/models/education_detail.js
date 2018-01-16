'use strict';
module.exports = (sequelize, DataTypes) => {
  var education_detail = sequelize.define('education_detail', {
    certificate_degree_name: DataTypes.STRING,
    major: DataTypes.STRING,
    completion_date: DataTypes.DATE,
    institute_name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return education_detail;
};