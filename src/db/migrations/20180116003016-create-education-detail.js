'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('educationDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      certificateDegreeName: {
        type: Sequelize.STRING
      },
      major: {
        type: Sequelize.STRING,
        allowNull: true
      },
      completionDate: {
        type: Sequelize.DATE
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
      country: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
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
    return queryInterface.dropTable('educationDetails');
  }
};
