'use strict';
module.exports = (sequelize, DataTypes) => {
  var submission = sequelize.define('submission', {
    media_content: DataTypes.STRING,
    apply_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return submission;
};