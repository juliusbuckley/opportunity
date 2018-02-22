module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('jobPosts', [{
      id: 1,
      jobTitle: 'Tour DJ',
      isCompanyNameHidden: false,
      createdDate: new Date(),
      jobDescription: 'Good opportunity',
      isPublished: true,
      visibility: 'Public',
      jobType: 'Gig',
      fromId: 1,
      industryId: 1,
      jobLocationId: 1,
      paymentAmount: null,
      paymentType: null,
      duration: 0,
      startDate: new Date(2017, 2, 14),
      endDate: new Date(2017, 4, 1),
      tentativeEffortsRequiredInHours: 0,
      jobStatus: 'Created',
      accountId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      jobTitle: 'Tour Singer',
      isCompanyNameHidden: false,
      createdDate: new Date(),
      jobDescription: 'Good opportunity',
      isPublished: true,
      visibility: 'Public',
      jobType: 'Gig',
      fromId: 1,
      industryId: 1,
      jobLocationId: 1,
      paymentAmount: null,
      paymentType: null,
      duration: 0,
      startDate: new Date(2017, 2, 14),
      endDate: new Date(2017, 4, 1),
      tentativeEffortsRequiredInHours: 0,
      jobStatus: 'Created',
      accountId: 1,
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
    return queryInterface.bulkDelete('jobPosts', null, {});
  }
};
