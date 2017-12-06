exports.id = 0;
exports.modules = {

/***/ "./db/models/job_post.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./db/index.js")

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_post', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    posted_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    job_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_type',
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
    is_company_name_hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_location',
        key: 'id'
      }
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    payment_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tentative_efforts_required_in_hours: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interview_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'job_post'
  });
};


/***/ })

};