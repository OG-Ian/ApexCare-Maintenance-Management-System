const Technician = require('../models/Technician');
const JobAssignment = require('../models/JobAssignment');

exports.getAssignedJobs = async (req, res) => {
    try {
        const jobs = await JobAssignment.findAll({ where: { TechnicianID: req.user.id } });
        res.status(200).json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve assigned jobs' });
    }
};

// Function to update job status
exports.updateJobStatus = async (req, res) => {
    try {
        const { jobId, status } = req.body;

        const job = await JobAssignment.findOne({ where: { AssignmentID: jobId, TechnicianID: req.user.id } });
        if (!job) {
            return res.status(404).json({ message: 'Job assignment not found' });
        }

        job.Status = status;
        await job.save();
        res.status(200).json({ message: 'Job status updated successfully', job });
    } catch (error) {
        console.error('Error updating job status:', error);
        res.status(500).json({ error: 'Failed to update job status' });
    }
};
