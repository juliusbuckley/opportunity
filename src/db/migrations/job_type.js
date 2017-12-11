/* jshint indent: 2 */
const sequelize = require('../models/index').Sequelize
const DataTypes = require('sequelize')

module.exports = sequelize.define('job_type', {
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
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });
