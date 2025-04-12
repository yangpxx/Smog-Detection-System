const sequelize = require('../config/db.config'); // 引入 Sequelize 实例
const City = require('./city.model');

// 关联模型与 Sequelize 实例
City.init(
  {
    cityName: { type: DataTypes.STRING, allowNull: false },
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  },
  { sequelize, modelName: 'City' }
);

module.exports = {
  sequelize,
  City
};