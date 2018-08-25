module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('companyUsers', {
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
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      smsNotificationActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      emailNotificationActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      membershipId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'memberships'
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
    return queryInterface.dropTable('companyUsers',{
      truncate: true
    });
  }
};
