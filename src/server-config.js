const app = require('express')()
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const sequelize = require('./db/index');

app.use(require('./api/routers/route.company'))

app.use(require('./api/routers/route.jobpost'))

app.get('/',function(req,res){
  res.send('Hello World');
})
module.exports = app
