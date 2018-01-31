module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    queryInterface.bulkInsert('industries', [
      {
        id: 1,
        createdAt: new Date(),
        industryName: 'Fashion',
        updatedAt: new Date()
      },
      {
        createdAt: new Date(),
        id: 2,
        industryName: 'Art',
        updatedAt: new Date()
      },
      {
        id: 3,
        createdAt: new Date(),
        industryName: 'Music',
        updatedAt: new Date()
      },
      {
        id: 4,
        createdAt: new Date(),
        industryName: 'Film',
        updatedAt: new Date()
      },
      {
        id: 5,
        industryName: 'Social Media',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});


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
