module.exports = (sequelize, DataTypes) => {
  var experienceDetail = sequelize.define('experienceDetail', {
    isCurrentJob: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    institutionName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cityName: {
      type: DataTypes.STRING
    },
    stateName: {
      type: DataTypes.STRING
    },
    countryName: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        experienceDetail.belongsTo(models.seekerUser, {
          allowNull: false
        })
      }
    }
  });

  return experienceDetail;
};
