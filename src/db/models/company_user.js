'use strict';
module.exports = (sequelize, DataTypes) => {
  var companyUser = sequelize.define('companyUser', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    smsNotificationActive: DataTypes.BOOLEAN,
    emailNotificationActive: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return companyUser;
};
