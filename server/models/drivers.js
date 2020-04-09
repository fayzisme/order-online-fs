'use strict';
module.exports = (sequelize, DataTypes) => {
  const drivers = sequelize.define('drivers', {
    full_name: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {});
  drivers.associate = function(models) {
    // associations can be defined here
  };
  return drivers;
};