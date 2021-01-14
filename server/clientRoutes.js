const express = require('express');
const client = express();
const controller = require('./controllers');
const bodyParser = require('body-parser');

client.use(express.static(__dirname + '/../client/dist'));
client.use(bodyParser.urlencoded({ extended: true }));
client.use(bodyParser.json());

client.get('/forecasts', controller.getForecast);
client.put('/forecasts', controller.updateForecast);
client.get('/radar', controller.loadRadar);
client.get('/maps', controller.loadMap);

module.exports = client;