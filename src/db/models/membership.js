'use strict';
module.exports = (sequelize, DataTypes) => {
  var membership = sequelize.define('membership', {
    accountPhoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accountEmailAddress: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true
      }
    },
    isSeeker: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    seekerUserId:{
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // membership.hasMany(models.jobPost)
        membership.hasOne(models.login, {as: 'membershipId'})
        membership.belongsTo(models.group)
        // membership.hasOne(models.seekerUser)
        // membership.belongsTo(models.account, {as: 'relatedAccount'})
        membership.hasOne(models.message, {as: 'fromId'})
      }
    }
  });
  return membership;
};
