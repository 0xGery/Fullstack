const express = require('express');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/Project');
const { exec } = require('child_process');
const app = express();
const port = 3001; 
const cors = require('cors');
const path = require('path');

// Connect to MongoDB

const dbHost = '93.188.161.44';
const dbName = '0xGery';
const dbPassword = '1Nocturn01';
const dbUsername = '0xGery'
const connectionString = `mongodb://${dbUsername}:${encodeURIComponent(dbPassword)}@${dbHost}:27017/${dbName}?authSource=admin`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware to parse JSON requests
app.use(express.json());

app.use(cors()); // CORS middleware
app.use('/api', projectRoutes); // API routes

app.post('/api/calculate', (req, res) => {
  const { totalDeposit, currentPrice, rangeSpread, debtRatio } = req.body;

  // Replace 'python' with 'python3' if that's the command for Python 3 on your system
  exec(`python3 calculate.py ${totalDeposit} ${currentPrice} ${rangeSpread} ${debtRatio}`, (error, stdout, stderr) => {
      if (error) {
          console.error(`exec error: ${error}`);
          return res.status(500).send(stderr);
      }
      res.send(stdout);
  });
});

// Test route
app.get('/', (req, res) => res.send('Backend server is running!'));

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
