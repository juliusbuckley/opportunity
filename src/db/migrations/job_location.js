/* jshint indent: 2 */
const sequelize = require('../models/index').Sequelize
const DataTypes = require('sequelize')

module.exports = sequelize.define('job_location', {
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
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });
