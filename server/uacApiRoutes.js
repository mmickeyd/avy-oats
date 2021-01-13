const express = require('express');
const axios = require('axios');
const uacAPI = express();
const client = './clientRoutes.js';
const controller = require('./controllers');
const bodyParser = require('body-parser');

uacAPI.use(express.static(__dirname + '/../client/dist'));
uacAPI.use(bodyParser.urlencoded({ extended: true }));
uacAPI.use(bodyParser.json());

const getUacForecast = () => {
  axios.get('https://utahavalanchecenter.org/forecast/salt-lake/json')
    .then(res => {
      axios.put('http://localhost:3000/forecasts', res.data.advisories[0]);
    })
    .catch(err => console.error(err));
};

const invokeUacGetForecast = () => {
  setInterval(getUacForecast, 600000);
};

invokeUacGetForecast();

module.exports = uacAPI;