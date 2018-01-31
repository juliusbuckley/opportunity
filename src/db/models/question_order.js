'use strict';
module.exports = (sequelize, DataTypes) => {
  var questionOrder = sequelize.define('questionOrder', {
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
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
