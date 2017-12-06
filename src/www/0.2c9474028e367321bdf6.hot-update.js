exports.id = 0;
exports.modules = {

/***/ "./db/models/business_stream.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_stream', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    business_stream_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    industry_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'industry',
        key: 'id'
      }
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'business_stream'
  });
};


/***/ }),

/***/ "./db/models/company.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    profile_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    business_stream_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'business_stream',
        key: 'id'
      }
    },
    establishment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    company_website_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    industry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'industry',
        key: 'id'
      }
    },
    city_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    state_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    street_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'company'
    });
};


/***/ }),

/***/ "./db/models/company_image.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_image', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    company_image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'company_image'
  });
};


/***/ }),

/***/ "./db/models/education_detail.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('education_detail', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'seeker_profile',
        key: 'user_account_id'
      }
    },
    certificate_degree_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    institute_university_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completion_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'education_detail'
  });
};


/***/ }),

/***/ "./db/models/experience_detail.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('experience_detail', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'seeker_profile',
        key: 'user_account_id'
      }
    },
    is_current_job: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_location_city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_location_state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_location_country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'experience_detail'
  });
};


/***/ }),

/***/ "./db/models/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__filename) {const Sequelize = __webpack_require__("sequelize")
var db = {}
const path = __webpack_require__("path")
var basename  = path.basename(__filename);
const fs = __webpack_require__("fs")
var sequelize = new Sequelize('big','postgres','123kid',{

  host: 'localhost',
  dialect: 'postgres',
   pool: {
     max: 5,
     min: 0,
     acquire: 30000,
     idle: 10000
   },
 // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
 operatorsAliases: false
});

// console.log(path)
// const modules = require('./answer.js')
// const JobPost = require('./job_post')
// console.log("file")
//
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//     console.log(file)
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });
//   console.log("file")
//
// // console.log(__dirname)
//
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
// console.log(db)
//
// modules.forEach(module) => {
//   const model = module(sequelize, Sequelize, config)
//   db[model.name] = model
// }
// // ...
const answer = __webpack_require__("./db/models/answer.js")
const business_stream = __webpack_require__("./db/models/business_stream.js")
const company_image = __webpack_require__("./db/models/company_image.js")
const company = __webpack_require__("./db/models/company.js")
const education_detail = __webpack_require__("./db/models/education_detail.js")
const experience_detail = __webpack_require__("./db/models/experience_detail.js")
const industry = __webpack_require__("./db/models/industry.js")
const interview = __webpack_require__("./db/models/interview.js")
const job_location = __webpack_require__("./db/models/job_location.js")
const job_post_activity = __webpack_require__("./db/models/job_post_activity.js")
const job_post_skill_set = __webpack_require__("./db/models/job_post_skill_set.js")
const job_post = __webpack_require__("./db/models/job_post.js")
const job_type = __webpack_require__("./db/models/job_type.js")
const message = __webpack_require__("./db/models/message.js")
const question_type = __webpack_require__("./db/models/question_type.js")
const question = __webpack_require__("./db/models/question.js")
const seeker_profile = __webpack_require__("./db/models/seeker_profile.js")
const seeker_skill_set = __webpack_require__("./db/models/seeker_skill_set.js")
const skill_set = __webpack_require__("./db/models/skill_set.js")
const status = __webpack_require__("./db/models/status.js")
const submission = __webpack_require__("./db/models/submission.js")
const user_account = __webpack_require__("./db/models/user_account.js")
const user_content = __webpack_require__("./db/models/user_content.js")
const user_log = __webpack_require__("./db/models/user_log.js")
const user_type = __webpack_require__("./db/models/user_type.js")
// const seed = require('../seed')()

// Sync all ../db/models that aren't already in the database

sequelize.sync().then(() => {
  // ok ... everything is nice!
  console.log('created big fella')
}).catch(error => {
  // oooh, did you enter wrong database credentials?
  console.log('not created big fella'+ error)

})
// sequelize.getQueryInterface().describeTable('company').success( … )
// => this will result in the structure of a table with all it's attributes and
// JobPost().findAll()
//  .then((result)=>{
//    console.log(result)
//    })

// => this will result in an array with all existing table names
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db.industry = industry;
// db.job_post = job_post;
module.exports = db;// module.exports.JobPost = JobPost

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),

/***/ "./db/models/industry.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('industry', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    industry_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'industry'
  });
};


/***/ }),

/***/ "./db/models/interview.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interview', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question',
        key: 'id'
      }
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    submissions: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'interview'
  });
};


/***/ }),

/***/ "./db/models/job_location.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_location', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'job_location'
  });
};


/***/ }),

/***/ "./db/models/job_post_activity.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_post_activity', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'id'
      }
    },
    apply_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
  }, {
    tableName: 'job_post_activity'
  });
};


/***/ }),

/***/ "./db/models/job_post_skill_set.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_post_skill_set', {
    skill_set_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'skill_set',
        key: 'id'
      }
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'id'
      }
    },
    skill_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'job_post_skill_set'
  });
};


/***/ }),

/***/ "./db/models/job_type.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    job_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'job_type'
  });
};


/***/ }),

/***/ "./db/models/message.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seeker_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hire_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    message_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    from_hire_manger: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'id'
      }
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'message'
  });
};


/***/ }),

/***/ "./db/models/question.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    question_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question_type',
        key: 'id'
      }
    },
    question_tip: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time_limit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    video: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    interview_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'question'
  });
};


/***/ }),

/***/ "./db/models/question_type.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'question_type'
  });
};


/***/ }),

/***/ "./db/models/seeker_profile.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seeker_profile', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    current_salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_annually_monthly: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,  // Timestamps
      createdAt: {
        type:DataTypes.DATE,
        allowNull: true
      },
      updatedAt: {
        type:DataTypes.DATE,
        allowNull: true
      }
    }, {
    tableName: 'seeker_profile'
  });
};


/***/ }),

/***/ "./db/models/seeker_skill_set.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seeker_skill_set', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'seeker_profile',
        key: 'user_account_id'
      }
    },
    skill_set_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skill_set',
        key: 'id'
      }
    },
    skill_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'seeker_skill_set'
  });
};


/***/ }),

/***/ "./db/models/skill_set.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill_set', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    skill_set_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'skill_set'
  });
};


/***/ }),

/***/ "./db/models/status.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'status'
  });
};


/***/ }),

/***/ "./db/models/submission.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('submission', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seeker_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    media_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
      }
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'submission'
  });
};


/***/ }),

/***/ "./db/models/user_account.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_account', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_type',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password_salt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password_hash_algorithm: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sms_notification_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    email_notification_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    user_image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    registration_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    twitter_handle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instagram_handle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    website_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    facebook_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user_account'
  });
};


/***/ }),

/***/ "./db/models/user_content.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_content', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    user_media: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user_content'
  });
};


/***/ }),

/***/ "./db/models/user_log.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_log', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    last_login_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_job_apply_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user_log'
  });
};


/***/ }),

/***/ "./db/models/user_type.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_type_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user_type'
  });
};


/***/ })

};