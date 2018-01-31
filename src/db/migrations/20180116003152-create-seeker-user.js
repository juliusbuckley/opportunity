'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('seekerUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      membershipId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'memberships'
        }
      },
      smsNotificationActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      emailNotificationActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false
      },
      userImage: {
        type: Sequelize.STRING,
        allowNull: false
      },
      twitterHandle: {
        type: Sequelize.STRING
      },
      instragramHandle: {
        type: Sequelize.STRING
      },
      websiteUrl: {
        type: Sequelize.STRING
      },
      facebookUrl: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('seekerUsers', {

        force: true,
        cascade: true,

    });
  }
};
