const express = require('express');
const router = express.Router();
const { saveCity, getWeather } = require('../controllers/weather.controller');

router.post('/save-city', saveCity);
router.get('/get-weather/:city', getWeather);

module.exports = router;