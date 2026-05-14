require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 5001;

// DÉMARRER LE SERVEUR APRÈS CONNEXION DB
sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Books service running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('DB connection failed:', err);
  });