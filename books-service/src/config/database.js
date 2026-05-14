const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'library_db',
  'admin',
  'admin123',
  {
    host: 'postgres',
    dialect: 'postgres',
    port: 5432
  }
);

module.exports = sequelize;