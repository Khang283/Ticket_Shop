'use strict';
const {
  Model
} = require('sequelize');
const ReceiptDetail = require('./ReceiptDetail');
const Ticket = require('./Ticket');
const CartDetail = require('./CartDetail');
module.exports = (sequelize, DataTypes) => {
  class TicketType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TicketType.hasMany(ReceiptDetail);
      TicketType.hasMany(Ticket);
      TicketType.hasMany(CartDetail);
    }
  }
  TicketType.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    sales: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 10
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at'
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    sequelize,
    modelName: 'TicketType',
    tableName: 'ticket_type',
  });
  return TicketType;
};