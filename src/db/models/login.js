'use strict';
module.exports = (sequelize, DataTypes) => {
  var login = sequelize.define('login', {
    userName: DataTypes.STRING,
    passwordSalt: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return login;
};
