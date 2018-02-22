'use strict';

module.exports = function (sequelize, DataTypes) {
  var companyImage = sequelize.define('companyImage', {
    companyImage: {
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
  return companyImage;
};