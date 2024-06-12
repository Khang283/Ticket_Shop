'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
      `SELECT id from users;`
    );

    const userRows = users[0];

    return queryInterface.bulkInsert('carts', [
      {
        id: uuidv4(),
        customer_id: userRows[0].id,
        total: 150.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        customer_id: userRows[1].id,
        total: 200.00,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('carts', null, {});
  }
};
