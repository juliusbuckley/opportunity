/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_location', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'job_location'
  });
};
