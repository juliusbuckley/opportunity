exports.id = 0;
exports.modules = {

/***/ "./db/models/answer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* jshint indent: 2 */
const sequelize = __webpack_require__("./db/index.js")
// const Sequelize = require('sequelize')
'use strict'
/* harmony default export */ __webpack_exports__["default"] = ((sequelize, DataTypes) => {
  console.log('stepping in big fella')
  return sequelize.define('answer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    submission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'submission',
        key: 'id'
      }
    },
    text_answer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    href: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'answer'
  });
});


/***/ })

};