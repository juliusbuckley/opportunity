/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('education_detail', {
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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'education_detail'
  });
};
