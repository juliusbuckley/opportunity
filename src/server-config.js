const app = require('express')()
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const sequelize = require('./db/models/index');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(require('./api/routers/route.login'))

app.use(require('./api/routers/route.seekerUser'))

app.use(require('./api/routers/route.jobpost'))

app.use(require('./api/routers/route.industry'))

app.use(require('./api/routers/route.businessStream'))

app.use(require('./api/routers/route.account'))

app.get('/',function(req,res){
  res.send('Hello World');
})
module.exports = app
