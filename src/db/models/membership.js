'use strict';
module.exports = (sequelize, DataTypes) => {
  var membership = sequelize.define('membership', {
    related_seeker_id: DataTypes.INTEGER,
    account_phone_number: DataTypes.STRING,
    account_email_number: DataTypes.STRING,
    is_seeker: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return membership;
};