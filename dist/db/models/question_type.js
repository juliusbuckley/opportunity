'use strict';

module.exports = function (sequelize, DataTypes) {
  var questionType = sequelize.define('questionType', {
    questionTypeName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return questionType;
};