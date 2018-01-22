'use strict';
module.exports = (sequelize, DataTypes) => {
  var group = sequelize.define('group', {
    groupName: DataTypes.STRING,
    planLevel: DataTypes.INTEGER
  },{underscored: true}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        group.hasMany(models.membership, {as: 'relatedGroup'})
        group.belongsTo(models.account,{as:'relatedAccount'})
      }
    }
  });

  return group;
};
