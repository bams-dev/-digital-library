require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const loanRoutes = require('./routes/loanRoutes');

const app = express();
app.use(express.json());

app.use('/loans', loanRoutes);

sequelize.sync()
  .then(() => console.log('Loans DB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Loans service running on port ${PORT}`);
});