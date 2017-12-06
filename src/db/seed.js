const fs = require('fs')
const sequelize = require('./models/index').sequelize
const sequelize_fixtures = require('sequelize-fixtures')
const models = require('./seed/index')
const seeds = require('seedquelize')

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
