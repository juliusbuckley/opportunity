'use strict';
module.exports = (sequelize, DataTypes) => {
  var seekerSkillSet = sequelize.define('seekerSkillSet', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        seekerSkillSet.belongsTo(models.seekerUser, {allowNull: false})
        seekerSkillSet.belongsTo(models.skillSet, {allowNull: false})
      }
    }
  });
  return seekerSkillSet;
};
