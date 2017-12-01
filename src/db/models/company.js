/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    profile_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    business_stream_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'business_stream',
        key: 'id'
      }
    },
    establishment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    company_website_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    industry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'industry',
        key: 'id'
      }
    },
    city_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    state_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    street_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'company'
    });
};
