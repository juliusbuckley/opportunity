'use strict';

var express = require('express');
var webpack = require('webpack');
var path = require('path');
var webpackConfig = require('../webpack.config.js');
var sequelize = require('./db/models/index');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(path.join(__dirname, '../www')));

app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

app.use(require('./api/routers/route.login'));

app.use(require('./api/routers/route.seekerUser'));

app.use(require('./api/routers/route.interview'));

app.use(require('./api/routers/route.jobpost'));

app.use(require('./api/routers/route.industry'));

app.use(require('./api/routers/route.businessStream'));

app.use(require('./api/routers/route.account'));

// app.get('/', function(req, res) {
//   res.send('Hello World');
// })

module.exports = app;