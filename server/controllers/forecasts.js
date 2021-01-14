const models = require('../models');
const request = require('request');

const getForecast = (req, res) => {
  const forecast = 'UAC';
  models.getForecastFromDB(forecast, (err, data) => {
    if (err) {
      console.error('get request failed: ', err);
      res.status(400);
    } else {
      res.status(200).send(data.rows[0].forecast);
      res.end();
    }
  });
};

const updateForecast = (req, res) => {
  let newForecast = (JSON.stringify(req.body.advisory)).split('\'').join('|>');
  newForecast = newForecast.split('danger_rose_1')[0] + 'overall_danger_rose_image' + newForecast.split ('overall_danger_rose_image')[1];
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

const loadRadar = (req, res) => {
  request(
    `https://www.bing.com/api/maps/mapcontrol?key=${process.env.BING_API_KEY}&callback=loadMapScenario`,
    (err, response, data) => {
      if (err) {
        res.send(err).status(404);
      } else {
        res.send(data);
      }
    }
  );
};

const loadMap = (req, res) => {
  res.send(`function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
      /* No need to set credentials if already passed in URL */
      center: new Microsoft.Maps.Location(40.616332, -111.6844868),
      zoom: 10});
    // tile url from Iowa Environmental Mesonet of Iowa State University
    var urlTemplate = 'https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-{timestamp}/{zoom}/{x}/{y}.png';
    var timestamps = ['900913-m50m', '900913-m45m', '900913-m40m', '900913-m35m', '900913-m30m', '900913-m25m', '900913-m20m', '900913-m15m', '900913-m10m', '900913-m05m', '900913'];
    var tileSources = [];
    for (var i = 0; i < timestamps.length; i++) {
      var tileSource = new Microsoft.Maps.TileSource({
        uriConstructor: urlTemplate.replace('{timestamp}', timestamps[i])
      });
      tileSources.push(tileSource);
    }
  var animatedLayer = new Microsoft.Maps.AnimatedTileLayer({ mercator: tileSources, frameRate: 500 });
  map.layers.insert(animatedLayer);

}`);
};

module.exports = {
  getForecast,
  updateForecast,
  loadRadar,
  loadMap
};