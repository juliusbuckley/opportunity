'use strict';
module.exports = (sequelize, DataTypes) => {
  var membership = sequelize.define('membership', {
    relatedSeekerId: DataTypes.INTEGER,
    accountPhoneNumber: DataTypes.STRING,
    accountEmailAddress: DataTypes.STRING,
    is_seeker: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        membership.hasMany(models.jobPost,{as: 'CreatedJobPosts'})
        membership.hasOne(models.login, {as: 'membershipId'})
        membership.hasOne(models.companyUser)
        membership.belongsTo(models.account, {as: 'relatedAccount'})
        membership.hasOne(models.message, {as: 'fromId'})
      }
    }
  });
  return membership;
};
