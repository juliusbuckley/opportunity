'use strict';
module.exports = (sequelize, DataTypes) => {
  var job_post = sequelize.define('job_post', {
    is_company_name_hidden: DataTypes.BOOLEAN,
    created_date: DataTypes.DATE,
    job_description: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    payment_amount: DataTypes.INTEGER,
    payment_type: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    tentative_efforts_required_in_hours: DataTypes.INTEGER,
    job_status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return job_post;
};
