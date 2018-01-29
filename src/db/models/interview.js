'use strict';
module.exports = (sequelize, DataTypes) => {
  var interview = sequelize.define('interview', {
    interviewName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        interview.hasMany(models.question, {allowNull: false})
      }
    }
  });
  return interview;
};
