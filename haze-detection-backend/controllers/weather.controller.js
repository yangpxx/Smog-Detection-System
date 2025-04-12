const City = require('../models/city.model');
const { fetchWeatherData } = require('../services/weather.service');

exports.saveCity = async (req, res) => {
  try {
    const { city } = req.body;
    const newCity = await City.create({ cityName: city });
    res.status(201).json({ success: true, data: newCity });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getWeather = async (req, res) => {
  try {
    const { city } = req.params;
    const weatherData = await fetchWeatherData(city);
    res.status(200).json({ success: true, data: weatherData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};