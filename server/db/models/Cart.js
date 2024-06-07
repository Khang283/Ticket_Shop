'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, {
        foreignKey: 'customerId'
      });
      Cart.hasMany(models.CartDetail, {
        foreignKey: 'cartId',
        as: 'cart'
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
  }, {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts',
    timestamps: true
  });
  return Cart;
};