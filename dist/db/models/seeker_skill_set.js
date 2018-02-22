'use strict';

module.exports = function (sequelize, DataTypes) {
  var seekerSkillSet = sequelize.define('seekerSkillSet', {}, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        seekerSkillSet.belongsTo(models.seekerUser, { allowNull: false });
        seekerSkillSet.belongsTo(models.skillSet, { allowNull: false });
      }
    }
  });
  return seekerSkillSet;
};