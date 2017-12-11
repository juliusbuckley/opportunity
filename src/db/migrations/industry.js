/* jshint indent: 2 */
const sequelize = require('../models/index').Sequelize
const Sequelize = require('sequelize')

module.exports = sequelize.define('industry', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    industry_name: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    // Timestamps
    createdAt: {
      type:Sequelize.DATE,
      allowNull: true
    },
    updatedAt: {
      type:Sequelize.DATE,
      allowNull: true
    }
  });
