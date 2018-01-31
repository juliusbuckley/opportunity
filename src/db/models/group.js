'use strict';
module.exports = (sequelize, DataTypes) => {
  var group = sequelize.define('group', {
    groupName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    planLevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        group.hasMany(models.membership, {allowNull: false})
        group.belongsTo(models.account, {allowNull: false})
      }
    }
  });

  return group;
};
