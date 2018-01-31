'use strict';
module.exports = (sequelize, DataTypes) => {
  var interview = sequelize.define('interview', {
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // interview.belongsToMany(models.question)
        // interview.belongsTo(models.jobPost, {allowNull: false})
      }
    }
  });
  return interview;
};
