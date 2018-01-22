'use strict';
module.exports = (sequelize, DataTypes) => {
  var questionOrder = sequelize.define('questionOrder', {
    order: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        questionOrder.belongsTo(models.question)
      }
    }
  });
  return questionOrder;
};
