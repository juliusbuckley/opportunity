'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
    */
    return queryInterface.bulkInsert('interviews', [{
      order: 2,
      createdAt: new Date(),
      jobPostId: 1,
      questionId: 1,
      updatedAt: new Date()
    }, {
      order: 1,
      createdAt: new Date(),
      jobPostId: 1,
      questionId: 2,
      updatedAt: new Date()
    }, {
      order: 3,
      createdAt: new Date(),
      jobPostId: 1,
      questionId: 3,
      updatedAt: new Date()
    }], {});
  },

  down: function down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
    */
    return queryInterface.bulkDelete('interviews', null, {});
  }
};