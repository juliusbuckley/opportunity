'use strict';
module.exports = (sequelize, DataTypes) => {
  var login = sequelize.define('login', {
    user_name: DataTypes.STRING,
    password_salt: DataTypes.STRING,
    password_hash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return login;
};