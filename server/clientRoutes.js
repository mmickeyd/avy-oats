const express = require('express');
const app = express();
const controller = require('./controllers');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/forecasts', controller.get);
app.put('/forecasts', controller.update);

module.exports = app;