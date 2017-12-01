/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seeker_skill_set', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'seeker_profile',
        key: 'user_account_id'
      }
    },
    skill_set_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skill_set',
        key: 'id'
      }
    },
    skill_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'seeker_skill_set'
  });
};
