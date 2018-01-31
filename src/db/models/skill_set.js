module.exports = (sequelize, DataTypes) => {
  var skillSet = sequelize.define('skillSet', {
    skillSetName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        skillSet.belongsTo(models.industry);
      }
    }
  });

  return skillSet;
};
