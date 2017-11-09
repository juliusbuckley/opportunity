const app = require('express')()
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

app.get('/',function(req,res){
  res.send('Hello World');
})
module.exports = app
