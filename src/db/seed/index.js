'use strict';

var fs        = require('fs');
var path      = require('path');
// var JSON
// var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
const sequelize_fixtures = require('sequelize-fixtures');
// var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/../config/config.json')[env];
// var db        = require('../models/index')
var models = require('../models')
// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }


// sequelize_fixtures.loadFile('./*.json', models).then(function(){
//       //  doStuffAfterLoad();
// });
