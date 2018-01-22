'use strict';
module.exports = (sequelize, DataTypes) => {
  var industry = sequelize.define('industry', {
    industryName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        industry.hasMany(models.businessStream)
      }
    }
  });
  return industry;
};
