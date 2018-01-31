'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    queryInterface.bulkInsert('industries', [{
      industryName: 'Fashion',
      id: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: 2,
      industryName: 'Art',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: 3,
      industryName: 'Music',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: 4,
      industryName: 'Film',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: 5,
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
    */
    return queryInterface.bulkDelete('industries', null, {});
  }
};
