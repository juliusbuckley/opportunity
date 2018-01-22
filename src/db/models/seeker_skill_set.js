'use strict';
module.exports = (sequelize, DataTypes) => {
  var seekerSkillSet = sequelize.define('seekerSkillSet', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        seekerSkillSet.belongsTo(models.seekerUser)
        seekerSkillSet.belongsTo(models.skillSet)
        seekerSkillSet.belongsTo(models.skillSet)
      }
    }
  });
  return seekerSkillSet;
};
