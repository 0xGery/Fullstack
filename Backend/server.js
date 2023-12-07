const express = require('express');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/Project');
const app = express();
const port = 3001; 
const cors = require('cors');

// Connect to MongoDB
const dbUsername = '0xGery'; // Replace with your MongoDB username
const dbPassword = 'Ab1CdFo12'; // Replace with your MongoDB password
const dbHost = '93.188.161.44';
const dbName = '0xGery';
const connectionString = `mongodb://${dbUsername}:${encodeURIComponent(dbPassword)}@${dbHost}:27017/${dbName}`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware to parse JSON requests
app.use(express.json());

app.use(cors()); // CORS middleware
app.use('/api', projectRoutes); // API routes

// Test route
app.get('/', (req, res) => res.send('Backend server is running!'));

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
