module.exports = (sequelize, DataTypes) => {
  var account = sequelize.define('account', {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cityName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stateName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profileDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    establishmentYear: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        account.hasMany(models.companyImage, {
          allowNull: false
        })
        account.hasMany(models.jobPost, {
          allowNull: false
        })
        account.hasMany(models.membership, {
          allowNull: false
        })
        // account.hasOne(models.membership, {as: 'relatedAccount'})
      }
    },
    instanceMethods: {
      getInfo: function() {
        return this.companyName + ' is located in ' + this.cityName;
      }
    }
  });

  return account;
};
