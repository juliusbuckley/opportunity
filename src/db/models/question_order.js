'use strict';
module.exports = (sequelize, DataTypes) => {
  var question_order = sequelize.define('question_order', {
    order: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return question_order;
};