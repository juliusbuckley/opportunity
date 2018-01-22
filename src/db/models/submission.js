'use strict';
module.exports = (sequelize, DataTypes) => {
  var submission = sequelize.define('submission', {
    mediaContent: DataTypes.STRING,
    applyDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        submission.belongsTo(models.jobPost)
        submission.belongsTo(models.status)
        submission.belongsTo(models.account)
      }
    }
  });
  return submission;
};
