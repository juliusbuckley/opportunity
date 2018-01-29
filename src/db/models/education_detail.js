'use strict';
module.exports = (sequelize, DataTypes) => {
  var educationDetail = sequelize.define('educationDetail', {
    certificateDegreeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    major: {
      type: DataTypes.STRING
    },
    completionDate: {
      type: DataTypes.DATE
    },
    isCurrent:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    institutionName: {
      type: DataTypes.STRING
    },
    cityName: {
      type: DataTypes.STRING
    },
    stateName: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        educationDetail.belongsTo(models.seekerUser, {allowNull: false})
      }
    }
  });
  return educationDetail;
};
