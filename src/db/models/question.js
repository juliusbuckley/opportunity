'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {
    questionText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    questionTip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timeLimit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    videoHref: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
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
