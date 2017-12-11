/* jshint indent: 2 */
/* jshint indent: 2 */
const sequelize = require('../models/index').Sequelize
const DataTypes = require('sequelize')
module.exports = sequelize.define('business_stream', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    business_stream_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    industry_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'industry',
        key: 'id'
      }
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: false
    }
  });
