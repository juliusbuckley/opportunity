const fs = require('fs')
const db = require('./models/index')
const sequelize_fixtures = require('sequelize-fixtures')
const models = require('./seed/index')
const seeds = require('seedquelize')
const path = require('path')

// console.log(models)
let modules = {
  'industry': db.industry,
  // 'answer': db.answer,
  'business_stream': db.business_stream,
  'company': db.company,
  'company_image': db.company_image,
  // 'education_detail': db.education_detail,
  // 'experience_detail': db.experience_detail,
  // 'interview': db.interview,
  'job_location': db.job_location,
  // 'job_post_activity': db.job_post_activity,
  // 'job_post_skill_set': db.job_post_skill_set,
  'job_type': db.job_type,
  'job_post': db.job_post,
  // 'message': db.message,
  // 'question_type': db.question_type,
  // 'question': db.question,
  // 'seeker_profile': db.seeker_profile,
  // 'seeker_skill_set': db.seeker_skill_set,
  // 'skill_set': db.skill_set,
  // 'status': db.status,
  // 'submission': db.submission,
  'user_type': db.user_type,
  'user_account': db.user_account
  // 'user_content': db.user_content,
  // 'user_log': db.user_log,
}
  // sequelize_fixtures.loadFile(__dirname+'/seed/'+Object.keys(modules)[0]+'.json', models)
  // .then(()=>{
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


const seed = function(model){
  // console.log('here')
  // if(model){
    fs.readFile(path.join(__dirname+'/seed/'+model+'.json'),'utf8',(err,data)=>{
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
      })
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
