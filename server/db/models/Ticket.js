'use strict';
const {
  Model
} = require('sequelize');
const TicketType = require('./TicketType');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.TicketType, {foreignKey: {field: 'ticket_type_id'}});
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