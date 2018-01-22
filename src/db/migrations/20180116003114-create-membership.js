'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('memberships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      relatedSeekerId: {
        type: Sequelize.INTEGER
      },
      accountPhoneNumber: {
        type: Sequelize.STRING
      },
      accountEmailAddress: {
        type: Sequelize.STRING
      },
      isSeeker: {
        type: Sequelize.BOOLEAN
      },
      relatedAccountId :{
        type: Sequelize.INTEGER,
        references: {
          model: 'accounts'
        }
      },
      relatedGroupId :{
        type: Sequelize.INTEGER,
        references: {
          model: 'groups'
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
    return queryInterface.dropTable('memberships', {

        force: true,
        cascade: true,

    });
  }
};
