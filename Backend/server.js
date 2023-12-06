const express = require('express');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/Project');
const app = express();
const port = 3001; 
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/0xGery', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get('/', (req, res) => res.send('Backend server is running!'));

app.use(cors()); // CORS middleware
app.use('/api', projectRoutes); // API routes


// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));

