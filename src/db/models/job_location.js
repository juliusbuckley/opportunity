'use strict';
module.exports = (sequelize, DataTypes) => {
  var jobLocation = sequelize.define('jobLocation', {
    cityName: DataTypes.STRING,
    stateName: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    streetAddress: DataTypes.STRING,
    countryName:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return jobLocation;
};
