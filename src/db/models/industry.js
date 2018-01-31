module.exports = (sequelize, DataTypes) => {
  var industry = sequelize.define('industry', {
    industryName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        industry.hasMany(models.businessStream, {
          allowNull: false
        })
      }
    }
  });

  return industry;
};
