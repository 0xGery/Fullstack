const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String, // e.g., 'Mainnet', 'Testnet'
    imageUrl: String, // Add an imageUrl field
});

module.exports = mongoose.model('Project', projectSchema);
