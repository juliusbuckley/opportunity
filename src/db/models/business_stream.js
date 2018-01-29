'use strict';
module.exports = (sequelize, DataTypes) => {
  var businessStream = sequelize.define('businessStream', {
    businessStreamName: {
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
  return businessStream;
};
