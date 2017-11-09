'use strict';

var app = require('express')();
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

app.get('/', function (req, res) {
  res.send('fuck');
});
module.exports = app;