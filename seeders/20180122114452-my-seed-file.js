'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('industries', [{
      industryName: 'Fashion',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      industryName: 'Art',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      industryName: 'Music',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      industryName: 'Film',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      industryName: 'Social Media',
      createdAt : new Date(),
      updatedAt : new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
