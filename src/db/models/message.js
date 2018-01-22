'use strict';
module.exports = (sequelize, DataTypes) => {
  var message = sequelize.define('message', {
    bodyText: DataTypes.STRING,
    subjectName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        message.belongsTo(models.jobPost)
      }
    }
  });
  return message;
};
