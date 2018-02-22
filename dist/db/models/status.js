'use strict';

module.exports = function (sequelize, DataTypes) {
  var status = sequelize.define('status', {
    statusName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return status;
};