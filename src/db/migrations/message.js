/* jshint indent: 2 */
const sequelize = require('../models/index').Sequelize
const DataTypes = require('sequelize')

module.exports = sequelize.define('message', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seeker_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hire_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    message_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    from_hire_manger: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'id'
      }
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
