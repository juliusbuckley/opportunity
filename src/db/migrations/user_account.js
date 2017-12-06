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
