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
      // define association here
      this.belongsTo(models.User, {foreignKey: {field: 'customer_id'}});
      this.hasMany(models.ReceiptDetail, {foreignKey: "receiptId"});
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
    modelName: 'Receipt',
    tableName: 'receipt',
    timestamps: false
  });
  return Receipt;
};