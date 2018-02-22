module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jobPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      isCompanyNameHidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      jobDescription: {
        type: Sequelize.STRING
      },
      isPublished: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      interviewId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      paymentAmount: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      paymentType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      jobType: {
        type: Sequelize.ENUM('Gig','Temporary','Full-Time'),
        allowNull: false
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      visibility : {
        type: Sequelize.ENUM('Public','Private'),
      },
      tentativeEffortsRequiredInHours: {
        type: Sequelize.INTEGER
      },
      jobStatus: {
        type: Sequelize.ENUM('Created','Pending Approval','Aprroved','Sourcing','Interview','Offer','Filled','Cancelled'),
        allowNull: false
      },
      accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'accounts'
        }
      },
      jobLocationId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'jobLocations'
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
    return queryInterface.dropTable('jobPosts');
  }
};
