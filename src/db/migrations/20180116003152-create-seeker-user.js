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
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      smsNotificationActive: {
        type: Sequelize.BOOLEAN
      },
      emailNotificationActive: {
        type: Sequelize.BOOLEAN
      },
      certificate_degree_name: {
        type: Sequelize.STRING
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      user_image: {
        type: Sequelize.STRING
      },
      twitter_handle: {
        type: Sequelize.STRING
      },
      instragram_handle: {
        type: Sequelize.STRING
      },
      website_url: {
        type: Sequelize.STRING
      },
      facebook_url: {
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
