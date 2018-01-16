'use strict';
module.exports = (sequelize, DataTypes) => {
  var experience_detail = sequelize.define('experience_detail', {
    is_current_job: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE,
    job_title: DataTypes.STRING,
    institution_name: DataTypes.STRING,
    city: DataTypes.STRING,
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
  return experience_detail;
};