const express = require('express');
const technicianController = require('../controllers/technicianController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/assigned-jobs', authMiddleware, technicianController.getAssignedJobs);

module.exports = router;