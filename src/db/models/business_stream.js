'use strict';
module.exports = (sequelize, DataTypes) => {
  var businessStream = sequelize.define('businessStream', {
    businessStreamName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return businessStream;
};
