const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./config/db.config'); // 直接引入 Sequelize 实例
const apiRoutes = require('./routes/api.routes');
const errorHandler = require('./middlewares/error.middleware');

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.use('/api', apiRoutes);

// 错误处理
app.use(errorHandler);

// 同步数据库并启动服务器
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});