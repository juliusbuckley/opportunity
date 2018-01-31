'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('jobLocations', [{
      id: 1,
      cityName: 'Silver Spring',
      stateName: 'MD',
      zipCode: 20904,
      longitude: 123,
      latitude: 123,
      streetAddress: '14238 castle blvd',
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
    return queryInterface.bulkDelete('jobLocations', null, {});
  }
};
