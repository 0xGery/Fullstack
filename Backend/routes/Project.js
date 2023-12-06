const express = require('express');
const router = express.Router();
const { Project, Service, Team } = require('../models/Project.js');

// const nodemailer = require('nodemailer');

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


// Service
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

// Team Section
router.get('/teams', async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


/*
router.post('/send', async (req, res) => {
    let { fullName, email, message } = req.body;

    // Nodemailer setup
    let transporter = nodemailer.createTransport({
        service: 'gmail', // or your email service
        auth: {
            user: 'yourEmail@example.com', 
            pass: 'yourEmailPassword' 
        }
    });

    let mailOptions = {
        from: email,
        to: 'yourEmail@example.com', // your email to receive messages
        subject: `New Message from ${fullName}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Success');
        }
    });
});
*/


module.exports = router;