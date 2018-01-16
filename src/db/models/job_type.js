'use strict';
module.exports = (sequelize, DataTypes) => {
  var job_type = sequelize.define('job_type', {
    job_type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return job_type;
};