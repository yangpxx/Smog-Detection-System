const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); // 导入已初始化的实例

const City = sequelize.define('City', {
  cityName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  latitude: DataTypes.FLOAT,
  longitude: DataTypes.FLOAT
});

module.exports = City;