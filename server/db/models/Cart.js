'use strict';
const {
  Model,
  Sequelize
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
      this.belongsTo(models.User, {foreignKey: {field: 'customer_id'}});
      this.hasMany(models.CartDetail, {foreignKey: 'cartId'})
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