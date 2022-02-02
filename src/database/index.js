 const Sequelize = require('sequelize');
const dbConfig = require('../config/config.json');

const connection = new Sequelize(dbConfig);


module.exports - connection; 