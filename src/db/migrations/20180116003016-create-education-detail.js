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
        type: Sequelize.STRING,
        allowNull: false
      },
      major: {
        type: Sequelize.STRING
      },
      completionDate: {
        type: Sequelize.DATE
      },
      isCurrent:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      institutionName: {
        type: Sequelize.STRING
      },
      cityName: {
        type: Sequelize.STRING
      },
      stateName: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      seeker_id: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('educationDetails');
  }
};
