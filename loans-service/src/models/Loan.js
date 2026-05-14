const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Loan = sequelize.define('Loan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  book_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  loan_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  return_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Loan;