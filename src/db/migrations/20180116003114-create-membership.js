module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('memberships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accountPhoneNumber: {
        type: Sequelize.STRING,
        allowNull: true
      },
      accountEmailAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isSeeker: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      accountId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'accounts'
        }
      },
      groupId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'groups'
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
    return queryInterface.dropTable('memberships', {
        force: true,
        truncate: true,
        cascade: true
    });
  }
};
