const Client = require('../models/Client');
const ServiceRequest = require('../models/ServiceRequest');
const Contract = require('../models/Contract');
const User = require('../models/User'); // 

// Get client details including associated user information
exports.getClientDetails = async (req, res) => {
    try {
        const client = await Client.findOne({
            where: { UserID: req.user.id },
            include: [{ model: User, as: 'User' }] // Ensure correct association
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

// Get contracts associated with the client
exports.getClientContracts = async (req, res) => {
    try {
        const contracts = await Contract.findAll({
            where: { ClientID: req.user.id }, // Ensure to reference ClientID correctly
            include: [{ model: Client, as: 'Client' }] // Adjust according to your associations
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

// Create a new service request for the client
exports.createServiceRequest = async (req, res) => {
    try {
        const { serviceTypeId, description } = req.body;

        if (!serviceTypeId || !description) {
            return res.status(400).json({ message: 'Service Type ID and Description are required.' });
        }

        const serviceRequest = await ServiceRequest.create({
            ClientID: req.user.id,
            ServiceTypeID: serviceTypeId,
            Description: description,
            RequestStatus: 'Pending', // Default status
            RequestedDateTime: new Date(),
        });

        res.status(201).json(serviceRequest);
    } catch (error) {
        console.error('Error creating service request:', error);
        res.status(500).json({ error: 'Failed to create service request' });
    }
};

// Update client details
exports.updateClientDetails = async (req, res) => {
    try {
        const { companyName, address, contactNumber } = req.body;

        const client = await Client.findOne({ where: { UserID: req.user.id } });
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        // Update client information
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

// Delete a service request by ID
exports.deleteServiceRequest = async (req, res) => {
    try {
        const { requestId } = req.params;

        const serviceRequest = await ServiceRequest.findOne({
            where: { RequestID: requestId, ClientID: req.user.id }
        });

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

