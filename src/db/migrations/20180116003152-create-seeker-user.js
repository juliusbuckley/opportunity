'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('seeker_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      user_name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      user_name: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      sms_notification_active: {
        type: Sequelize.BOOLEAN
      },
      email_notification_active: {
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
    return queryInterface.dropTable('seeker_users');
  }
};