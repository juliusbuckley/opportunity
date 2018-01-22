'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      questionText: {
        type: Sequelize.STRING
      },
      questionTip: {
        type: Sequelize.STRING
      },
      timeLimit: {
        type: Sequelize.INTEGER
      },
      videoHref: {
        type: Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questions', {

        force: true,
        cascade: true,

    });
  }
};
