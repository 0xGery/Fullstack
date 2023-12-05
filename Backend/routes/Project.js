const express = require('express');
const router = express.Router();
const { Project, Service } = require('../models/Project.js');

// Project Section
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Service
/*
router.get('/services', async (req, res) => {
    console.log('Services route hit');
    try {
        const services = await Service.find();
        console.log('Services from DB:', services); // Log data fetched from DB
        res.json(services);
    } catch (err) {
        console.error('DB Error:', err.message); // Log any DB errors
        res.status(500).json({ message: err.message });
    }
});
*/

router.get('/Service', async (req, res) => {
    const { chainName, serviceType } = req.query;
    
    let query = {};
    if (chainName) query.chainName = chainName;
    if (serviceType) query.serviceType = serviceType;

    try {
        const services = await Service.find(query); // Use Services model to find services
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Fetch distinct chain names
router.get('/chains', async (req, res) => {
    console.log('Chains route hit');
    try {
        const chains = await Service.distinct('chainName');
        console.log('Chains:', chains);
        res.json(chains);
    } catch (err) {
        console.error('Error in /chains:', err.message);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;