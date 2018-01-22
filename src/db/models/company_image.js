'use strict';
module.exports = (sequelize, DataTypes) => {
  var companyImage = sequelize.define('companyImage', {
    companyImage: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return companyImage;
};
