'use strict';

const { UUIDV4 } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('receipt', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      customerId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        },
        field: 'customer_id'
      },
      total: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('receipt');
  }
};
