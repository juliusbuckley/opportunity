/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_log', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    last_login_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_job_apply_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'user_log'
  });
};
