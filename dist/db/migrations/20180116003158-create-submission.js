'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('submissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mediaContent: {
        type: Sequelize.STRING,
        allowNull: false
      },
      applyDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      jobPostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'jobPosts'
        }
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'statuses'
        }
      },
      accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'accounts'
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
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('submissions', {

      force: true,
      cascade: true

    });
  }
};