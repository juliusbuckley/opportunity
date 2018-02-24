'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('businessStreams', [{
      businessStreamName: 'Music Production',
      industryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessStreamName: 'Audio Engineering',
      industryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function down(queryInterface, Sequelize) {

    return queryInterface.bulkDelete('businessStreams', null, {});
  }
};