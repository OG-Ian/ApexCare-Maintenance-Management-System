// controllers/clientController.js
const Client = require('../models/Client');
const ServiceRequest = require('../models/ServiceRequest');
const Contract = require('../models/Contract');
const User = require('../models/User');
const serviceRequestQueue = require('../queues/queue'); // Import the queue

exports.getClientDetails = async (req, res) => {
    try {
        const client = await Client.findOne({
            where: { UserID: req.user.id },
            include: [{ model: User, as: 'User' }]
        });

        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        res.status(200).json(client);
    } catch (error) {
        console.error('Error fetching client details:', error);
        res.status(500).json({ error: 'Failed to retrieve client details' });
    }
};

exports.getClientContracts = async (req, res) => {
    try {
        const contracts = await Contract.findAll({
            where: { ClientID: req.user.id },
            include: [{ model: Client, as: 'Client' }]
        });

        if (!contracts.length) {
            return res.status(404).json({ message: 'No contracts found for this client' });
        }

        res.status(200).json(contracts);
    } catch (error) {
        console.error('Error fetching client contracts:', error);
        res.status(500).json({ error: 'Failed to retrieve contracts' });
    }
};

exports.createServiceRequest = async (req, res) => {
    try {
        const { serviceTypeId, description } = req.body;

        if (!serviceTypeId || !description) {
            return res.status(400).json({ message: 'Service Type ID and Description are required.' });
        }

        // Create a service request and enqueue it for processing
        const serviceRequest = await ServiceRequest.create({
            ClientID: req.user.id,
            ServiceTypeID: serviceTypeId,
            Description: description,
            RequestStatus: 'Pending',
            RequestedDateTime: new Date(),
        });

        // Add the service request to the queue for processing
        serviceRequestQueue.add({ 
            clientId: req.user.id, 
            serviceTypeId, 
            description 
        });

        res.status(201).json(serviceRequest);
    } catch (error) {
        console.error('Error creating service request:', error);
        res.status(500).json({ error: 'Failed to create service request' });
    }
};

exports.logCall = async (req, res) => {
    try {
        const { description } = req.body;

        if (!description) {
            return res.status(400).json({ message: 'Description is required.' });
        }

        const log = await CallLog.create({
            ClientID: req.user.id,
            Description: description,
            LoggedAt: new Date(),
        });

        res.status(201).json(log);
    } catch (error) {
        console.error('Error logging call:', error);
        res.status(500).json({ error: 'Failed to log the call' });
    }
};

// Update client details and handle more attributes
exports.updateClientDetails = async (req, res) => {
    try {
        const { companyName, address, contactNumber } = req.body;

        const client = await Client.findOne({ where: { UserID: req.user.id } });
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        client.CompanyName = companyName || client.CompanyName;
        client.Address = address || client.Address;
        client.ContactNumber = contactNumber || client.ContactNumber;

        await client.save();
        res.status(200).json({ message: 'Client details updated successfully', client });
    } catch (error) {
        console.error('Error updating client details:', error);
        res.status(500).json({ error: 'Failed to update client details' });
    }
};

exports.deleteServiceRequest = async (req, res) => {
    try {
        const { requestId } = req.params;

        const serviceRequest = await ServiceRequest.findOne({ where: { RequestID: requestId, ClientID: req.user.id } });
        if (!serviceRequest) {
            return res.status(404).json({ message: 'Service request not found' });
        }

        await serviceRequest.destroy();
        res.status(200).json({ message: 'Service request deleted successfully' });
    } catch (error) {
        console.error('Error deleting service request:', error);
        res.status(500).json({ error: 'Failed to delete service request' });
    }
};

exports.createContract = async (req, res) => {
    try {
        const { ContractStartDate, ContractEndDate } = req.body;
        const contract = await Contract.create({
            ClientID: req.user.id,
            ContractStartDate,
            ContractEndDate,
        });
        res.status(201).json(contract);
    } catch (error) {
        console.error('Error creating contract:', error);
        res.status(500).json({ message: 'An error occurred while creating the contract' });
    }
};
