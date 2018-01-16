'use strict';
module.exports = (sequelize, DataTypes) => {
  var message = sequelize.define('message', {
    body: DataTypes.STRING,
    subject: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return message;
};