'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {
    question_text: DataTypes.STRING,
    question_tip: DataTypes.STRING,
    time_limit: DataTypes.INTEGER,
    video_href: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return question;
};