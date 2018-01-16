'use strict';
module.exports = (sequelize, DataTypes) => {
  var company_user = sequelize.define('company_user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    sms_notification_active: DataTypes.BOOLEAN,
    email_notification_active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return company_user;
};