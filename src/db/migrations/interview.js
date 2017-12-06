/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interview', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question',
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
    submissions: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job_status: {
      type: DataTypes.INTEGER,
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
    tableName: 'interview'
  });
};
