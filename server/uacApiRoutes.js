const express = require('express');
const axios = require('axios');
const uacAPI = express();
const controller = require('./controllers');
const bodyParser = require('body-parser');
const { checkTime, checkDay } = require('../helpers.js');

uacAPI.use(express.static(__dirname + '/../client/dist'));
uacAPI.use(bodyParser.urlencoded({ extended: true }));
uacAPI.use(bodyParser.json());

let checkApi = true;
let forecastDate = 'Not a real date';

const resetCheckApi = () => {
  checkDay() ? checkApi = true : null;
  checkTime() ? checkApi = true : checkApi = false;
};

const getUacForecast = () => {
  console.log('did check api change? ', checkApi);
  checkApi ? (
    axios.get('https://utahavalanchecenter.org/forecast/salt-lake/json')
      .then(res => {
        console.log('getting forecast...');
        const data = res.data.advisories[0];
        data.date_issued !== forecastDate ? (
          forecastDate = data.date_issued,
          checkApi = false,
          axios.put('http://localhost:3000/forecasts', data)
        ) : null;
      })
      .catch(err => console.error(err))
  ) : null;
};

const invokeUacGetForecast = () => {
  // --- remove these two function invocations before deployment --- //
  resetCheckApi();
  getUacForecast();
  // --------------------------------------------------------------- //
  setInterval(getUacForecast, 600000);
  setInterval(resetCheckApi, 300000);
};

invokeUacGetForecast();

module.exports = uacAPI;