'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('receipt', [
      {
        id: 1,
        customer_id: '1144ea58-2985-49c4-985f-567c626f3787',
        date: new Date(),
        total: 10000,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        customer_id: '1a5633be-1efc-4f4b-8c84-70eab387df59',
        date: new Date(),
        total: 20000,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('receipt', null, {});
  }
};
