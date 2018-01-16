'use strict';
module.exports = (sequelize, DataTypes) => {
  var company_image = sequelize.define('company_image', {
    company_image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return company_image;
};