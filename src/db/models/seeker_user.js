'use strict';
module.exports = (sequelize, DataTypes) => {
  var seeker_user = sequelize.define('seeker_user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    user_name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    sms_notification_active: DataTypes.BOOLEAN,
    email_notification_active: DataTypes.BOOLEAN,
    certificate_degree_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    user_image: DataTypes.STRING,
    twitter_handle: DataTypes.STRING,
    instragram_handle: DataTypes.STRING,
    website_url: DataTypes.STRING,
    facebook_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return seeker_user;
};