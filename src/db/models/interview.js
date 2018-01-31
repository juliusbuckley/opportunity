module.exports = (sequelize, DataTypes) => {
  var interview = sequelize.define('interview', {
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

      }
    }
  });

  return interview;
};
