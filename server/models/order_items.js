'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_items = sequelize.define('order_items', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  order_items.associate = function(models) {
    order_items.belongsTo(models.orders, {foreignKey: 'order_id', as: 'order'})
    order_items.belongsTo(models.products, {foreignKey: 'product_id', as: 'product'})
  };
  return order_items;
};