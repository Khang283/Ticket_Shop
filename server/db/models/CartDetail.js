'use strict';
const {
  Model
} = require('sequelize');
const Cart = require('./Cart');
const TicketType = require('./TicketType');
module.exports = (sequelize, DataTypes) => {
  class CartDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartDetail.belongsTo(models.Cart, {
        foreignKey: 'cartId',
        as: 'cart'
      });
      CartDetail.hasOne(models.TicketType, {
        foreignKey: 'ticketTypeId',
        as: 'ticketType'
      });
      this.belongsTo(models.Cart, {foreignKey: {field: 'cart_id'}});
      this.belongsTo(models.TicketType, {foreignKey: {field: 'ticket_type_id'}});
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