require('dotenv').config();

const express = require('express');
const cors = require('cors');

const sequelize = require('./config/database');

const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/books', bookRoutes);

sequelize.sync()
.then(() => {
  console.log('Database synced');
});

app.listen(3001, () => {
  console.log('Books Service Running');
});