const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String, // e.g., 'Mainnet', 'Testnet'
    // Add other relevant fields
});

module.exports = mongoose.model('Project', projectSchema);
