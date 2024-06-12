'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const carts = await queryInterface.sequelize.query(
      `SELECT id from carts;`
    );

    const ticketTypes = await queryInterface.sequelize.query(
      `SELECT id from ticket_type;`
    );

    const cartRows = carts[0];
    const ticketTypeRows = ticketTypes[0];

    return queryInterface.bulkInsert('cart_detail', [
      {
        id: uuidv4(),
        price: 100.00,
        ticket_type_id: ticketTypeRows[0].id,
        cart_id: cartRows[0].id,
        amount: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        price: 200.00,
        ticket_type_id: ticketTypeRows[1].id,
        cart_id: cartRows[1].id,
        amount: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cart_detail', null, {});
  }
};
