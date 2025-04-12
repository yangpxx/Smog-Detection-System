const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Weather = sequelize.define('Weather', {
  cityId: {                       // 关联 Cities 表的城市ID
    type: DataTypes.INTEGER,
    allowNull: false
  },
  aqi: DataTypes.STRING,          // 空气质量指数
  pm2p5: DataTypes.STRING,        // PM2.5浓度
  pm10: DataTypes.STRING,         // PM10浓度
  primaryPollutant: DataTypes.STRING, // 主要污染物
  updateTime: DataTypes.DATE      // 数据更新时间
});

module.exports = Weather;