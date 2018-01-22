'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {
    questionText: DataTypes.STRING,
    questionTip: DataTypes.STRING,
    timeLimit: DataTypes.INTEGER,
    videoHref: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        question.belongsTo(models.account)
        question.belongsTo(models.jobPost)
        question.belongsTo(models.questionType)
      }
    }
  });
  return question;
};
