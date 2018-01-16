'use strict';
module.exports = (sequelize, DataTypes) => {
  var status = sequelize.define('status', {
    status_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return status;
};