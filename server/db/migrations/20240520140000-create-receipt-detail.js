'use strict';

const { UUIDV4 } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('receipt_detail', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      receiptId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'receipt'
          },
          key: 'id'
        },
        field: 'receipt_id'
      },
      ticketTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'ticket_type',
          },
          key: 'id'
        },
        field: 'ticket_type_id'
      },
      total: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('receipt_detail');
  }
};