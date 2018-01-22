'use strict';
module.exports = (sequelize, DataTypes) => {
  var account = sequelize.define('account', {
    companyName: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    cityName: DataTypes.STRING,
    stateName: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    profileDescription: DataTypes.STRING,
    establishmentDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        account.hasMany(models.companyImage)
        account.hasMany(models.jobPost)
        // account.hasMany(models.membership)
        account.hasOne(models.membership, {as: 'relatedAccount'})
      }
    }
  });
  return account;
};
