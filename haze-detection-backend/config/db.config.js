const { Sequelize } = require('sequelize');
require('dotenv').config();

// 创建 Sequelize 实例
const sequelize = new Sequelize(
  process.env.DB_NAME,      // 数据库名
  process.env.DB_USER,      // 用户名
  process.env.DB_PASS,      // 密码
  {
    host: process.env.DB_HOST, // 数据库地址
    dialect: 'mysql',          // 数据库类型
    pool: {                    // 连接池配置
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// 测试数据库连接
sequelize.authenticate()
  .then(() => console.log('数据库连接成功'))
  .catch(err => console.error('数据库连接失败:', err));

module.exports = sequelize; // 导出实例