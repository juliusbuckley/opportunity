'use strict';

var bcrypt = require('bcrypt');
module.exports = function (sequelize, DataTypes) {
  var login = sequelize.define('login', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordSalt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    },
    instanceMethods: {
      generateHash: function generateHash(password) {
        try {
          return bcrypt.hashSync(password, 8);
        } catch (e) {
          console.log('error: ' + e);
        }
      }
    }
  });
  return login;
};