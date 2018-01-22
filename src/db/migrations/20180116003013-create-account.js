'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyName: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.INTEGER
      },
      cityName: {
        type: Sequelize.STRING
      },
      stateName: {
        type: Sequelize.STRING
      },
      streetAddress: {
        type: Sequelize.STRING
      },
      profileDescription: {
        type: Sequelize.STRING
      },
      establishmentDate: {
        type: Sequelize.DATE
      },
      membershipId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'memberships',
          key:'id'
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
    return queryInterface.dropTable('accounts');
  }
};
