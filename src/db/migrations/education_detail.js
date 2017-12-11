/* jshint indent: 2 */
/* jshint indent: 2 */
const sequelize = require('../models/index').Sequelize
const DataTypes = require('sequelize')

module.exports =  sequelize.define('education_detail', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'seeker_profile',
        key: 'user_account_id'
      }
    },
    certificate_degree_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    institute_university_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completion_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
