const express = require('express');
const axios = require('axios');
const uacAPI = express();
const controller = require('./controllers');
const bodyParser = require('body-parser');
const { checkTime, checkDay } = require('../helpers.js');

uacAPI.use(express.static(__dirname + '/../client/dist'));
uacAPI.use(bodyParser.urlencoded({ extended: true }));
uacAPI.use(bodyParser.json());

let newDay = false;
let forecastDate = 'Tuesday, January 12, 2021 - 4:41am';

const checkDayInterval = () => {
  checkDay() ? newDay = true : null;
};

const getUacForecast = () => {
  console.log('is it a new day? ', newDay);
  checkTime() && newDay ? (
    axios.get('https://utahavalanchecenter.org/forecast/salt-lake/json')
      .then(res => {
        console.log('getting forecast...');
        const data = res.data.advisories[0];
        data.advisory.date_issued !== forecastDate ? (
          console.log('updating forecast...'),
          forecastDate = data.advisory.date_issued,
          newDay = false,
          axios.put('http://localhost:3000/forecasts', data)
        ) : null;
      })
      .catch(err => console.error(err))
  ) : null;
};

const invokeForecastIntervals = () => {
  // --- remove these two function invocations before deployment --- //
  checkDayInterval();
  getUacForecast();
  // --------------------------------------------------------------- //
  setInterval(getUacForecast, 900000);
  setInterval(checkDayInterval, 43200000);
};

invokeForecastIntervals();

module.exports = uacAPI;
