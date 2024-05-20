'use strict';
const {
  Model
} = require('sequelize');
const Cart = require('./Cart');
const TicketType = require('./tickettype');
module.exports = (sequelize, DataTypes) => {
  class CartDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartDetail.belongsTo(Cart);
      CartDetail.hasOne(TicketType);
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
  }, {
    sequelize,
    modelName: 'CartDetail',
    tableName: 'cart_detail',
    timestamps: true
  });
  return CartDetail;
};