const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const User = sequelize.define('User', {

  name: {
    type: DataTypes.STRING
  },

  email: {
    type: DataTypes.STRING,
    unique: true
  },

  role: {
    type: DataTypes.STRING,
    defaultValue: 'student'
  }

});

module.exports = User;