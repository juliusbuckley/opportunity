/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    job_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
   createdAt: DataTypes.DATE,
   updatedAt: DataTypes.DATE,
  }, {
    tableName: 'job_type'
  });
};
