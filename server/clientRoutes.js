const express = require('express');
const client = express();
const controller = require('./controllers');
const bodyParser = require('body-parser');
const morgan = require('morgan');

client.use(express.static(__dirname + '/../client/dist'));
client.use(bodyParser.urlencoded({ extended: true }));
client.use(bodyParser.json());
client.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

client.get('/forecasts', controller.getForecast);
client.put('/forecasts', controller.updateForecast);
client.get('/radar', controller.loadRadar);
client.get('/maps', controller.loadMap);

module.exports = client;