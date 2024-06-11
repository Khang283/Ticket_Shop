'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, {
        foreignKey: 'customerId'
      });
      Cart.hasMany(models.CartDetail, {
        foreignKey: 'cartId',
        as: 'cartDetails' // Changed alias to match usage
      });
    }
  }
  Cart.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    customerId: {
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'id'
      },
      field: 'customer_id'
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    modelName: 'Cart',
    tableName: 'carts',
  });
  return Cart;
};
