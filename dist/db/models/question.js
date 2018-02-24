'use strict';

module.exports = function (sequelize, DataTypes) {
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
      type: DataTypes.TIME,
      allowNull: false
    },
    videoHref: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fromId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'companyUsers'
      }
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'accounts'
      }
    },
    questionTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'questionTypes'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        question.belongsTo(models.account, { allowNull: false });
        question.belongsTo(models.companyUser, { as: 'from', allowNull: false });
        question.belongsToMany(models.jobPost, { through: models.interview });
        question.belongsTo(models.questionType, { allowNull: false });
      }
    }
  });
  return question;
};