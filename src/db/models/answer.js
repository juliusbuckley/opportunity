'use strict';
module.exports = (sequelize, DataTypes) => {
  var answer = sequelize.define('answer', {
    text_answer: DataTypes.STRING,
    href: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return answer;
};