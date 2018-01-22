'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('submissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mediaContent: {
        type: Sequelize.STRING
      },
      applyDate: {
        type: Sequelize.DATE
      },
      jobPostId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'jobPosts'
        }
      },
      status_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'statuses'
        }
      },
      account_id:{
        type: Sequelize.INTEGER,
        references:{
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('submissions', {

        force: true,
        cascade: true,

    });
  }
};
