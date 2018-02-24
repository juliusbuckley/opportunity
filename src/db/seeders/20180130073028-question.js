module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('questions', [{
        id: 1,
        questionText: 'What does a real DJ mean to you',
        questionTip: 'Make sure you get some good lighting! :)',
        timeLimit: '00:00:30',
        fromId: 1,
        questionTypeId: 1,
        accountId: 1,
        videoHref: 'google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        questionText: 'Why should we hire you',
        questionTip: 'Make sure you get some good lighting! :)',
        timeLimit: '00:00:30',
        fromId: 1,
        questionTypeId: 1,
        accountId: 1,
        videoHref: 'google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        questionText: 'Talk about a challenging situation during a set and how you handled it.',
        questionTip: 'Make sure you get some good lighting! :)',
        timeLimit: '00:01:00',
        fromId: 1,
        questionTypeId: 1,
        accountId: 1,
        videoHref: 'google.com',
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
    return queryInterface.bulkDelete('questions', null, {});
  }
};
