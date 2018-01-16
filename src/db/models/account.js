'use strict';
module.exports = (sequelize, DataTypes) => {
  var account = sequelize.define('account', {
    company_name: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    city_name: DataTypes.STRING,
    state_name: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    street_address: DataTypes.STRING,
    profile_description: DataTypes.STRING,
    establishment_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return account;
};