'use strict';
module.exports = (sequelize, DataTypes) => {
  var questionType = sequelize.define('questionType', {
    questionTypeName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return questionType;
};
