'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      textAnswer: {
        type: Sequelize.STRING
      },
      href: {
        type: Sequelize.STRING
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'questions'
        }
      },
      submissionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'submissions'
        }
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
    return queryInterface.dropTable('answers');
  }
};
