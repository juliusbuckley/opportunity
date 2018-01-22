'use strict';
module.exports = (sequelize, DataTypes) => {
  var seekerUser = sequelize.define('seekerUser', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    gender: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    smsNotificationActive: DataTypes.BOOLEAN,
    emailNotificationActive: DataTypes.BOOLEAN,
    dateOfBirth: DataTypes.DATE,
    userImage: DataTypes.STRING,
    twitterHandle: DataTypes.STRING,
    instagramHandle: DataTypes.STRING,
    websiteUrl: DataTypes.STRING,
    facebookUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        seekerUser.hasOne(models.membership, {as: 'relatedSeekerId'})
        // seekerUser.belongsTo(models.membership)
        seekerUser.hasMany(models.submission,{as: 'submissions'})
      }
    }
  });
  return seekerUser;
};
