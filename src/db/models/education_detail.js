'use strict';
module.exports = (sequelize, DataTypes) => {
  var educationDetail = sequelize.define('educationDetail', {
    certificateDegreeName: DataTypes.STRING,
    major: DataTypes.STRING,
    completionDate: DataTypes.DATE,
    institutionName: DataTypes.STRING,
    cityName: DataTypes.STRING,
    stateName: DataTypes.STRING,
    countryName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        educationDetail.belongsTo(models.seekerUser)
      }
    }
  });
  return educationDetail;
};
