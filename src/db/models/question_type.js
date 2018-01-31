module.exports = (sequelize, DataTypes) => {
  var questionType = sequelize.define('questionType', {
    questionTypeName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // questionType.
      }
    }
  });

  return questionType;
};
