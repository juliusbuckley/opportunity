/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('experience_detail', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'seeker_profile',
        key: 'user_account_id'
      }
    },
    is_current_job: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_location_city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_location_state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_location_country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
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
  }, {
    tableName: 'experience_detail'
  });
};
