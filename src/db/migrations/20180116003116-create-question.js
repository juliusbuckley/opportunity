module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      questionText: {
        type: Sequelize.STRING,
        allowNull: false
      },
      questionTip: {
        type: Sequelize.STRING,
        allowNull: false
      },
      timeLimit: {
        type: Sequelize.TIME,
        allowNull: false
      },
      videoHref: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fromId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'companyUsers'
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
    return queryInterface.dropTable('questions', {
        force: true,
        cascade: true
    });
  }
};
