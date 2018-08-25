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
        type: Sequelize.STRING,
        allowNull: false
      },
      zipCode: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cityName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stateName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      streetAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profileDescription: {
        type: Sequelize.STRING,
        allowNull: false
      },
      establishmentYear: {
        type: Sequelize.STRING,
        allowNull: false
      },
      membershipId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'memberships',
          key: 'id'
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
    return queryInterface.dropTable('accounts',{
      truncate: true
    });
  }
};
