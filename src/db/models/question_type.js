'use strict';
module.exports = (sequelize, DataTypes) => {
  var question_type = sequelize.define('question_type', {
    question_type_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return question_type;
};