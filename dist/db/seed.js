'use strict';

var fs = require('fs');
var db = require('./models/index');
var sequelize_fixtures = require('sequelize-fixtures');
var models = require('./models/index');
// console.log(models)
var seeds = require('seedquelize');
var path = require('path');

// console.log(models)
var modules = {
  'industry': db.industry,
  // 'answer': db.answer,
  'businessStream': db.businessStream,
  'company': db.company,
  'companyImage': db.companyImage,
  // 'educationDetail': db.educationDetail,
  // 'experienceDetail': db.experienceDetail,
  // 'interview': db.interview,
  'jobLocation': db.jobLocation,
  // 'jobPost_activity': db.jobPost_activity,
  // 'jobPostSkillSet': db.jobPostSkillSet,
  'jobType': db.jobType,
  'jobPost': db.jobPost,
  // 'message': db.message,
  // 'questionType': db.questionType,
  // 'question': db.question,
  // 'seeker_profile': db.seeker_profile,
  // 'seekerSkillSet': db.seekerSkillSet,
  // 'skillSet': db.skillSet,
  // 'status': db.status,
  // 'submission': db.submission,
  'user_type': db.user_type,
  'user_account': db.user_account
  // 'user_content': db.user_content,
  // 'user_log': db.user_log,

  // sequelize_fixtures.loadFile(__dirname+'/seed/'+Object.keys(modules)[0]+'.json', models)
  // .then(()=>{
  //   console.log('freshly')
  // })
  //   console.log('breeming')
  //   sequelize_fixtures.loadFile(__dirname+'/seed/'+Object.keys(modules)[1]+'.json', models)
  //   .then(()=>{
  //     console.log('breeming')
  //     sequelize_fixtures.loadFile(__dirname+'/seed/'+Object.keys(modules)[2]+'.json', models)
  //     .then(()=>{
  //       console.log('breeming')
  //       sequelize_fixtures.loadFile(__dirname+'/seed/'+Object.keys(modules)[3]+'.json', models)
  //       .then(()=>{
  //         console.log('breeming')
  //         sequelize_fixtures.loadFile(__dirname+'/seed/'+Object.keys(modules)[4]+'.json', models)
  //         .then(()=>{
  //           console.log('breeming')
  //           sequelize_fixtures.loadFile(__dirname+'/seed/'+Object.keys(modules)[5]+'.json', models)
  //           .then(()=>{
  //             console.log('breeming')
  //             sequelize_fixtures.loadFile(__dirname+'/seed/'+Object.keys(modules)[6]+'.json', models)
  //             .then(()=>{
  //               console.log('breeming')
  //               sequelize_fixtures.loadFile(__dirname+'/seed/'+Object.keys(modules)[71]+'.json', models)
  //               .then(()=>{
  //                 console.log('breeming')
  //               })
  //             })
  //           })
  //         })
  //       })
  //     })
  //   })
  // })


};var seed = function seed(model) {
  // console.log('here')
  // if(model){
  fs.readFile(path.join(__dirname + '/seed/industry.json'), 'utf8', function (err, data) {
    //   if(data){
    //     data = data.split('\n');
    // //     data.pop()
    // //     data = '['+data+']'
    // const newData = JSON.parse(data)
    // for (const i in newData) {
    //   // console.log(i)
    //   newData[i].data['job_status'] = 1
    // }
    //     newData.pop()
    //     data = newData.map(curr => {
    //       const obj = {}
    //       obj['model'] = model
    //       obj['data'] = curr
    //       return obj
    //     }, ()=>{
    //     })
    // console.log(newData)
    // //     // let array = {model:newData[0]['model'],data:[]}
    // //     // data = newDataJ.forEach(curr=>{
    // //     //   array.data.push(curr.data)
    // //     // // })f
    // fs.writeFile(__dirname +'/seed/'+model+'.json',JSON.stringify(newData), 'utf8',(err,newData)=>{
    //   console.log('overwritted')
    // })
  });
  // }
  // seeds([newData]).then(()=>{
  //   console.log('done big fella')
  // })

  // }
  // sequelize_fixtures.loadFile(__dirname +'/seeders/industry.json', models).then(function(){
  //   console.log('done')
  // }).catch(err=>{
  //   console.log(err)
  // });

};

// specify file encoding (default utf8)
module.exports = seed;
// seed('answer')
// seed('businessStream') //data available
// seed('company') //data available
// seed('companyImage') //data available
// seed('educationDetail')
// seed('experienceDetail')
// seed('industry') //data available
// seed('interview')
// seed('jobLocation')
// seed('jobPost') //data available
// seed('jobPost_activity')
// seed('jobPostSkillSet')
// seed('jobType') //data available
// seed('message')
// seed('question')
// seed('questionType')
// seed('seeker_profile')
// seed('seekerSkillSet')
// seed('skillSet')
// seed('status')
// seed('submission')
// seed('user_account') //data available
// seed('user_content')
// seed('user_log')
// seed('user_type') //data available