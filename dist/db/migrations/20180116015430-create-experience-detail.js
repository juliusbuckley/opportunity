'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('experienceDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      isCurrentJob: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      jobTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      institutionName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cityName: {
        type: Sequelize.STRING
      },
      stateName: {
        type: Sequelize.STRING
      },
      countryName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      seekerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'seekerUsers'
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
    return queryInterface.dropTable('experienceDetails');
  }
};