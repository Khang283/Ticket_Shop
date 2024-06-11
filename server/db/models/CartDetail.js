'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartDetail extends Model {
    static associate(models) {
      // define association here
      CartDetail.belongsTo(models.Cart, {
        foreignKey: 'cartId',
        as: 'cart'
      });
      CartDetail.belongsTo(models.TicketType, {
        foreignKey: 'ticketTypeId',
        as: 'ticketType'
      });
    }
  }
  CartDetail.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ticketTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'ticket_type',
        },
        key: 'id'
      },
      field: 'ticket_type_id'
    },
    cartId: {
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: 'carts'
        },
        key: 'id'
      },
      field: 'cart_id'
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
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
    modelName: 'CartDetail',
    tableName: 'cart_detail',
  });
  return CartDetail;
};
