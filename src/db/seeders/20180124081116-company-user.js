module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('companyUsers', [{
      id: 1,
      firstName: 'Sam',
      lastName: 'Smith',
      userName: 'samsneak90',
      isActive: true,
      smsNotificationActive: true,
      emailNotificationActive: true,
      membershipId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('companyUsers', null, {});
  }
};
