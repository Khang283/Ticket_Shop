'use strict';
const {
  Model
} = require('sequelize');
const Receipt = require('./Receipt');
const TicketType = require('./TicketType');
module.exports = (sequelize, DataTypes) => {
  class ReceiptDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ReceiptDetail.belongsTo(models.Receipt, { 
        foreignKey: 'receiptId', 
        as: 'receipt' 
      });
      ReceiptDetail.belongsTo(models.TicketType, { 
        foreignKey: 'ticketTypeId', 
        as: 'ticketType' 
      });
      this.belongsTo(models.Receipt, {foreignKey: {field: 'receipt_id'}});
      this.belongsTo(models.TicketType, {foreignKey: {field: 'ticket_type_id'}});
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at',
    }
  }, {
    sequelize,
    modelName: 'ReceiptDetail',
    tableName: 'receipt_detail',
  });
  return ReceiptDetail;
};