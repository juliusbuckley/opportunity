'use strict';
module.exports = (sequelize, DataTypes) => {
  var status = sequelize.define('status', {
    statusName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return status;
};
