/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('submission', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seeker_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    media_content: {
      type: DataTypes.TEXT,
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
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
  }, {
    tableName: 'submission'
  });
};
