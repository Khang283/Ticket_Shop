'use strict';
const {
  Model
} = require('sequelize');
const Receipt = require('./Receipt');
const TicketType = require('./tickettype');
module.exports = (sequelize, DataTypes) => {
  class ReceiptDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ReceiptDetail.belongsTo(Receipt);
      ReceiptDetail.hasOne(TicketType)
    }
  }
  ReceiptDetail.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    receiptId: {
      type: DataTypes.UUID,
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
      type: DataTypes.INTEGER,
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
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ReceiptDetail',
    tableName: 'receipt_detail',
    timestamps: true
  });
  return ReceiptDetail;
};