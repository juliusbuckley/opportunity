'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('experienceDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      isCurrentJob: {
        type: Sequelize.BOOLEAN
      },
      startDate: {
        type: Sequelize.DATE
      },
      jobTitle: {
        type: Sequelize.STRING
      },
      institutionName: {
        type: Sequelize.STRING
      },
      cityName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      stateName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      countryName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING
      },
      seeker_id: {
        type: Sequelize.INTEGER,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('experienceDetails');
  }
};
