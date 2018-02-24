'use strict';

module.exports = function (sequelize, DataTypes) {
  var answer = sequelize.define('answer', {
    textAnswer: {
      type: DataTypes.STRING
    },
    href: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        answer.belongsTo(models.question, { allowNull: false });
        answer.belongsTo(models.submission, { allowNull: false });
      }
    }
  });
  return answer;
};