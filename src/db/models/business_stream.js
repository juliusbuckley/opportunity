'use strict';
module.exports = (sequelize, DataTypes) => {
  var business_stream = sequelize.define('business_stream', {
    business_stream_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return business_stream;
};