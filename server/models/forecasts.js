const database = require('../../database/dbConnection');

const getForecastFromDB = (request, callback) => {
  const queryString = 'SELECT * FROM forecasts';
  database.query(queryString, callback);
};

const updateForecastInDB = (newForecast, callback) => {
  const queryString = `UPDATE forecasts SET forecast = '${newForecast}'`;
  database.query(queryString, callback);
};

module.exports = {
  getForecastFromDB,
  updateForecastInDB
};