require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

// DÉMARRAGE SERVEUR APRÈS CONNEXION DB
const PORT = process.env.PORT || 5002;

sequelize.sync()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Users service running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to DB:', err);
  });