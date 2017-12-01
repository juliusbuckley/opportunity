/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('industry', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    industry_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'industry'
  });
};
