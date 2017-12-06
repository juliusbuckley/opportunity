exports.id = 0;
exports.modules = {

/***/ "./db/config/config.json":
/***/ (function(module, exports) {

module.exports = {"development":{"username":"postgres","password":"123kid","database":"breemed","host":"127.0.0.1","dialect":"postgres"},"test":{"username":"root","password":null,"database":"database_test","host":"127.0.0.1","dialect":"mysql"},"production":{"dialect":"mysql"}}

/***/ }),

/***/ "./db/seed.js":
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__("fs")
const sequelize = __webpack_require__("./db/index.js").sequelize
const sequelize_fixtures = __webpack_require__("sequelize-fixtures")
const models = __webpack_require__("./db/seed/index.js")
const seeds = __webpack_require__("seedquelize")

// console.log(models)
const seed = function(model){
  // if(model){
    // fs.readFile(__dirname+'/seed/'+model+'.json','utf8',(err,data)=>{
    //   if(data){
    //     data = data.split('\n');
    //     data.pop()
    //     data = '['+data+']'
    //     const newData = JSON.parse(data)
    //     // data = newData.map(curr => {
    //     //   const obj = []
    //     //   // obj['model'] = model
    //     //   obj.push(curr.data)
    //     //   return obj
    //     // }, ()=>{
    //     // })
    //     console.log(newData)
    //     // let array = {model:newData[0]['model'],data:[]}
    //     // data = newDataJ.forEach(curr=>{
    //     //   array.data.push(curr.data)
    //     // // })f
    //     fs.writeFile(__dirname +'/seed/'+model+'.json',JSON.stringify(data), 'utf8',(err,newData)=>{
    //       console.log('overwritted')
    //     })
    //   }
        // seeds([newData]).then(()=>{
        //   console.log('done big fella')
        // })
        // sequelize_fixtures.loadFile(__dirname+'/seed/industry.json', models).then(function(){
        //   console.log('breeming')
        // })
    // }
      // sequelize_fixtures.loadFile(__dirname +'/seeders/industry.json', models).then(function(){
      //   console.log('done')
      // }).catch(err=>{
      //   console.log(err)
      // });


  }

  // specify file encoding (default utf8)
module.exports = seed
// seed('answer')
// seed('business_stream') //data available
// seed('company') //data available
// seed('company_image') //data available
// seed('education_detail')
// seed('experience_detail')
// seed('industry') //data available
// seed('interview')
// seed('job_location')
// seed('job_post') //data available
// seed('job_post_activity')
// seed('job_post_skill_set')
// seed('job_type') //data available
// seed('message')
// seed('question')
// seed('question_type')
// seed('seeker_profile')
// seed('seeker_skill_set')
// seed('skill_set')
// seed('status')
// seed('submission')
// seed('user_account') //data available
// seed('user_content')
// seed('user_log')
// seed('user_type') //data available


/***/ }),

/***/ "./db/seed/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename, __dirname) {

var fs        = __webpack_require__("fs");
var path      = __webpack_require__("path");
var Sequelize = __webpack_require__("sequelize");
var basename  = path.basename(__filename);
var env       = Object({"BUILD_TARGET":"server"}).NODE_ENV || 'development';
var config    = __webpack_require__("./db/config/config.json")[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(Object({"BUILD_TARGET":"server"})[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js", "/"))

/***/ })

};