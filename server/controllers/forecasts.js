const models = require('../models');

const get = (req, res) => {
  const forecast = 'UAC';
  models.getForecastFromDB(forecast, (err, data) => {
    if (err) {
      console.error('get request failed: ', err);
      res.status(400);
    } else {
      console.log('get forecast from database successful');
      res.status(200).send(data.rows[0].forecast);
      res.end();
    }
  });
};

const update = (req, res) => {
  let newForecast = (JSON.stringify(req.body.advisory)).split('\'').join('|>');
  newForecast = newForecast.split('danger_rose_1')[0] + 'overall_danger_rating' + newForecast.split('overall_danger_rating')[1];
  models.updateForecastInDB(newForecast, (err, results) => {
    if (err) {
      console.error('update forecast failed: ', err);
      res.status(400);
    } else {
      console.log('updated forecast in database successfully');
      res.status(200).end();
    }
  });
};

module.exports = {
  get,
  update
};