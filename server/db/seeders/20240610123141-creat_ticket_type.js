'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ticket_type', [
      {
        id: 1,
        name: 'Vé người lớn',
        price: 70000,
        sales: 0,
        description: 'Đây là vé người lớn',
        amount: 100, 
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Vé trẻ em',
        price: 50000,
        sales: 0,
        description: 'Đây là vé trẻ em',
        amount: 100,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ticket_type', null, {});
  }
};
