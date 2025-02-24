const express = require('express');
const router = express.Router();

// Example GET route
router.get('/', (req, res) => {
    res.send('Get all service requests');
});

// Example POST route
router.post('/', (req, res) => {
    const { clientId, description } = req.body;
    // Add logic to create a new service request
    res.send('New service request created');
});

module.exports = router;
