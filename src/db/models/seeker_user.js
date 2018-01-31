'use strict';
module.exports = (sequelize, DataTypes) => {
  var seekerUser = sequelize.define('seekerUser', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    smsNotificationActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    emailNotificationActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    twitterHandle: {
      type: DataTypes.STRING
    },
    instragramHandle: {
      type: DataTypes.STRING
    },
    websiteUrl: {
      type: DataTypes.STRING
    },
    facebookUrl: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        seekerUser.belongsTo(models.membership, {allowNull:false})
        // seekerUser.belongsTo(models.membership)
        seekerUser.hasMany(models.submission,{as: 'submissions'})
      },
    },
    instanceMethods:{
      getInfo: function(){
        return this.firstName + ' instagram handle is ' + this.instragramHandle;
      }
    }
  });
  return seekerUser;
};
