const express = require('express');
const app = express();
const port = 3001; // Different from the React port
const mongoose = require('mongoose');

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server running on port ${port}`));
mongoose.connect('mongodb://localhost:27017/Frontend', { useNewUrlParser: true, useUnifiedTopology: true });
