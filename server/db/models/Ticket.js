'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.TicketType, {
        foreignKey: 'ticketTypeId',
        as: 'ticketType'
      });
    }
  }
  Ticket.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING
    },
    ticketTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'ticket_type'
        },
        key: 'id'
      },
      field: 'ticket_type_id'
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    sequelize,
    modelName: 'Ticket',
    tableName: 'tickets',
  });
  return Ticket;
};
