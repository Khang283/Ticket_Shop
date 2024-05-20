'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ticket_type', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      sales: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      amount: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 10
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
    await queryInterface.dropTable('ticket_type');
  }
};