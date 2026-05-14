const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Users Service is running');
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Users service running on port ${PORT}`);
});