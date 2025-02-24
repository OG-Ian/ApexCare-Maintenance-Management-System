const { Sequelize }= require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('apexcare_solutionsdb', process.env.DB_USER || 'root', process.env.DB_PASS || 'Ianmasoabi01', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql', // Set to MySQL
  port: 3306, // MySQL default port
  dialectOptions: {
  
  },
  logging: false // Optional: Set to `true` to see SQL queries in the console
});

module.exports = sequelize;
