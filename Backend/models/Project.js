const mongoose = require('mongoose');

// Define the Schemas first
const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String, // e.g., 'Mainnet', 'Testnet'
    imageUrl: String, // Add an imageUrl field
});

const serviceSchema = new mongoose.Schema({
    chainName: String, // Chainlisted
    serviceType: String, // 'Relayer' or 'ChainService'
    chainTo: String,
    imageUrl: String,
    Installation: String,
    endPoints: Array,
});

const teamSchema = new mongoose.Schema({
    Name: String,
    Role: String,
    description: String,
    imageUrl: String,
})

// Then create models using the schemas
const Team = mongoose.model('Team', teamSchema, 'Teams');
const Project = mongoose.model('Project', projectSchema);
const Service = mongoose.model('Service', serviceSchema, 'Services');

module.exports = { Project, Service, Team };