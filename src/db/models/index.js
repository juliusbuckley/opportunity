'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       =  'development' || process.env.POSTGRES;
var config    = require(__dirname + '/../config/config.json')
var db        = {};
// var seed = require('../seed')
var sequelize = new Sequelize(process.env.POSTGRES, config.production);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join('../../src/db/models/'+file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync().then(()=>{
  console.log('done big fella')

}).catch((err)=>{
  console.log('failed big fella' + err)
})

module.exports = db;
