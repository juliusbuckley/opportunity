const express = require('express');
require('dotenv').config()
const webpack = require('webpack');
const path = require('path')
const webpackConfig = require('../webpack.config.js');
const sequelize = require('./db/models/index');
const bodyParser = require('body-parser')
const app = express()
const jwt = require('express-jwt');
const cors = require('cors')
const authRouter = require('./api/routers/index');

app.use(cors())

// Authentication middleware provided by express-jwt.
// This middleware will check incoming requests for a valid
// JWT on any routes that it is applied to.
// app.get('/api', (req,res) =>{
//   console.log('freshly')
//   res.redirect('/')
// })

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

app.use(require('./api/routers/route.membership'))
app.use('/',authRouter)
// app.get('/', function(req, res) {
//   res.send('Hello World');
// })
app.listen(3000, () =>{
  console.log('listening on port 3000');
})
module.exports = app;
