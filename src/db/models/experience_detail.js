'use strict';
module.exports = (sequelize, DataTypes) => {
  var experienceDetail = sequelize.define('experienceDetail', {
    isCurrentJob: DataTypes.BOOLEAN,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    jobTitle: DataTypes.STRING,
    institutionName: DataTypes.STRING,
    cityName: DataTypes.STRING,
    stateName: DataTypes.STRING,
    countryName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        experienceDetail.belongsTo(models.seekerUser)
      }
    }
  });
  return experienceDetail;
};
