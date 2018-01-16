'use strict';
module.exports = (sequelize, DataTypes) => {
  var job_location = sequelize.define('job_location', {
    city_name: DataTypes.STRING,
    state_name: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    street_address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return job_location;
};