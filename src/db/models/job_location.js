'use strict';
module.exports = (sequelize, DataTypes) => {
  var jobLocation = sequelize.define('jobLocation', {
    cityName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stateName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return jobLocation;
};
