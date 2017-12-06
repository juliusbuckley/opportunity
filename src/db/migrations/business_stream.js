/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_stream', {
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
  }, {
    tableName: 'business_stream'
  });
};
