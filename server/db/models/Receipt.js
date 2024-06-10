'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Receipt extends Model {
    static associate(models) {
      Receipt.belongsTo(models.User, {
        foreignKey: 'customerId',
      });
      Receipt.hasMany(models.ReceiptDetail, {
        foreignKey: 'receiptId',
        as: 'receiptDetails'
      });
    }
  }
  Receipt.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.UUID,
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
        type: DataTypes.DECIMAL,
        defaultValue: 0,
      },
  }, {
    sequelize,
    modelName: 'Receipt',
    tableName: 'receipt',
    timestamps: false
  });
  return Receipt;
};