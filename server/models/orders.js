'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    user_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    driver_id: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    
  };
  return orders;
};