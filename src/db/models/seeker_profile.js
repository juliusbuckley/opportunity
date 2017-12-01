/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seeker_profile', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    current_salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_annually_monthly: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'seeker_profile'
  });
};
