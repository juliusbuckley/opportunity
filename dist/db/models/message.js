'use strict';

module.exports = function (sequelize, DataTypes) {
  var message = sequelize.define('message', {
    bodyText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subjectName: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        message.belongsTo(models.jobPost);
      }
    }
  });
  return message;
};