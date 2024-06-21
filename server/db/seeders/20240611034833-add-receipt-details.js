'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const receipts = await queryInterface.sequelize.query(
      `SELECT id from receipt;`
    );

    const ticketTypes = await queryInterface.sequelize.query(
      `SELECT id from ticket_type;`
    );

    const receiptRows = receipts[0];
    const ticketTypeRows = ticketTypes[0];

    return queryInterface.bulkInsert('receipt_detail', [
      {
        id: uuidv4(),
        receipt_id: receiptRows[0].id,
        ticket_type_id: ticketTypeRows[0].id,
        total: 50.00,
        amount: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        receipt_id: receiptRows[1].id,
        ticket_type_id: ticketTypeRows[1].id,
        total: 100.00,
        amount: 4,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('receipt_detail', null, {});
  }
};
