'use strict';

module.exports = function (sequelize, DataTypes) {
  var submission = sequelize.define('submission', {
    mediaContent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    applyDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        submission.belongsTo(models.jobPost);
        submission.belongsTo(models.status);
        submission.belongsTo(models.account);
      }
    }
  });
  return submission;
};