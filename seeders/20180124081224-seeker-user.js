'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('seekerUsers', [{
      id:1,
      firstName: 'Ebrima',
      lastName: 'Jobe',
      userName: 'enjsmoove',
      membershipId: 3,
      gender: 'Male',
      isActive: true,
      smsNotificationActive: true,
      emailNotificationActive: true,
      dateOfBirth: new Date(1992,7,20),
      userImage: 'google.jpg',
      twitterHandle: '@freshlybreemed',
      instragramHandle: '@freshlybreemed',
      websiteUrl: 'freshlybreemed.com',
      facebookUrl: 'facebook.com/chickenandmumbosauce',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:2,
      firstName: 'Fred',
      lastName: 'Seagraves',
      userName: 'seagraves',
      membershipId: 4,
      gender: 'Male',
      isActive: true,
      smsNotificationActive: true,
      emailNotificationActive: true,
      dateOfBirth: new Date(1990,7,6),
      userImage: 'google.jpg',
      twitterHandle: '@rare_junk',
      instragramHandle: '@_seagraves',
      websiteUrl: 'youthinnumbers.com',
      facebookUrl: 'facebook.com/youthinnumbers',
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
    return queryInterface.bulkDelete('seekerUsers', null, {});
  }
};
