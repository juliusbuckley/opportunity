'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
    */
    return queryInterface.bulkInsert('accounts', [{
      id: 1,
      companyName: 'Warner Bros.',
      zipCode: 90210,
      cityName: 'Beverly Hills',
      stateName: 'CA',
      streetAddress: '123 Main Street',
      profileDescription: 'Home of Warner Bros. Movies, TV Shows and Video Games including Harry Potter, DC Comics and more!',
      establishmentYear: 1923,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      companyName: 'World Star',
      zipCode: 89104,
      cityName: 'Las Vegas',
      stateName: 'NV',
      streetAddress: '123 Tupac Street',
      profileDescription: 'WorldstarHipHop is home to everything entertainment & hip hop. The #1 urban outlet responsible for breaking the latest urban news!',
      establishmentYear: 2005,
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
    return queryInterface.bulkDelete('accounts', null, {});
  }
};