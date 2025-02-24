const express = require('express');
const clientController = require('../controllers/clientController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Route to get client details
router.get('/details/:id', authMiddleware, clientController.getClientDetails);

// Route to get all contracts for a specific client
router.get('/:id/contracts', authMiddleware, clientController.getClientContracts);

// Route to create a new contract for a client
router.post('/contract', authMiddleware, clientController.createContract);

module.exports = router;
