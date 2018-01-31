'use strict';
module.exports = (sequelize, DataTypes) => {
  var companyImage = sequelize.define('companyImage', {
    companyImage: {
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
  return companyImage;
};
