'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('memberships', [{
      id:1,
      seekerUserId: null,
      accountPhoneNumber: '240-205-3485',
      accountEmailAddress: 'freshlybreemed@gmail.com',
      isSeeker: false,
      accountId: 1,
      groupId: 1,
      createdAt: new Date(),
      updatedAt: new Date
    },{
      id:2,
      seekerUserId: null,
      accountPhoneNumber: '214-473-3485',
      accountEmailAddress: 'mercyexperience@gmail.com',
      isSeeker: false,
      accountId: 1,
      groupId: 1,
      createdAt: new Date(),
      updatedAt: new Date
    },
    {
      id:3,
      seekerUserId: 1,
      accountPhoneNumber: '301-890-8673',
      accountEmailAddress: 'ebrima.jobe92@gmail.com',
      isSeeker: true,
      accountId: null,
      groupId: null,
      createdAt: new Date(),
      updatedAt: new Date
    },
    {
      id:4,
      seekerUserId: 2,
      accountPhoneNumber: '301-890-9909',
      accountEmailAddress: 'rarejunk@gmail.com',
      isSeeker: true,
      accountId: null,
      groupId: null,
      createdAt: new Date(),
      updatedAt: new Date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('memberships', null, {});
  }
};
