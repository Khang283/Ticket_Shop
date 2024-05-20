'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cart_detail', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0
      },
      ticketTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'ticket_type',
          },
          key: 'id'
        },
        field: 'ticket_type_id'
      },
      cartId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'carts'
          },
          key: 'id'
        },
        field: 'cart_id'
      },
      amount: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cart_detail');
  }
};