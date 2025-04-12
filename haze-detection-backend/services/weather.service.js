const axios = require('axios');
require('dotenv').config();

exports.fetchNearestStationData = async (city, userLat, userLon) => {
  try {
    const response = await axios.get(`mq5hv4cvm2.re.qweatherapi.com/v7/air/now?location=${city}&key=${process.env.WEATHER_API_KEY}`);
    const stations = response.data.station;

    // 计算用户位置与各监测站的距离（简化版）
    let nearestStation = stations.reduce((prev, curr) => {
      const prevDistance = calculateDistance(userLat, userLon, prev.lat, prev.lon);
      const currDistance = calculateDistance(userLat, userLon, curr.lat, curr.lon);
      return prevDistance < currDistance ? prev : curr;
    });

    return {
      stationName: nearestStation.name,
      aqi: nearestStation.aqi,
      pm2p5: nearestStation.pm2p5,
      pm10: nearestStation.pm10
    };
  } catch (error) {
    throw new Error('监测站数据获取失败: ' + error.message);
  }
};

// 辅助函数：计算两点间距离（示例）
function calculateDistance(lat1, lon1, lat2, lon2) {
  // 实现经纬度距离计算逻辑（如Haversine公式）
  return Math.sqrt((lat1 - lat2) ** 2 + (lon1 - lon2) ** 2);
}