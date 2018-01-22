'use strict';
module.exports = (sequelize, DataTypes) => {
  var answer = sequelize.define('answer', {
    textAnswer: DataTypes.STRING,
    href: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        answer.belongsTo(models.question)
        answer.belongsTo(models.submission)
      }
    }
  });
  return answer;
};
