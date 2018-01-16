'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('job_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_company_name_hidden: {
        type: Sequelize.BOOLEAN
      },
      created_date: {
        type: Sequelize.DATE
      },
      job_description: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      payment_amount: {
        type: Sequelize.INTEGER
      },
      payment_type: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      tentative_efforts_required_in_hours: {
        type: Sequelize.INTEGER
      },
      job_status: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('job_posts');
  }
};
