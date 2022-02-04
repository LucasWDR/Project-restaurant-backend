const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const User = sequelize.define('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type:  DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type:  DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type:  DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type:  DataTypes.DATE,
  }
}, {

});

module.exports =User; 