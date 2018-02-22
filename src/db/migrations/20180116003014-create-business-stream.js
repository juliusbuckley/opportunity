module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('businessStreams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessStreamName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      industryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'industries'
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
    return queryInterface.dropTable('businessStreams');
  }
};
