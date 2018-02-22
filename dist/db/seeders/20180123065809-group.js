'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
    */
    return queryInterface.bulkInsert('groups', [{
      id: 1,
      groupName: 'Admins',
      planLevel: 1,
      accountId: 1,
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
    return queryInterface.bulkDelete('groups', null, {});
  }
};