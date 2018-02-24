'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
    */
    return queryInterface.bulkInsert('questionTypes', [{
      id: 1,
      questionTypeName: 'Video Timed',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
    */
    return queryInterface.bulkDelete('questionTypes', null, {});
  }
};