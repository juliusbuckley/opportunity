'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
const sequelize_fixtures = require('sequelize-fixtures');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = require('../models/index')

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
let modules = {
  'industry': db.industry
}
console.log(modules.industry)
// db.Sequelize.sync()
  // .then(()=>{
// db.industry.sync()
sequelize_fixtures.loadFile('/Users/macbookpro/Documents/HackReactor/Opp/src/db/seed/industry.json', modules)

  // })
// modules.forEach(module) => {
//   const model = module(sequelize, Sequelize, config)
//   db[model.name] = model
// }
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
