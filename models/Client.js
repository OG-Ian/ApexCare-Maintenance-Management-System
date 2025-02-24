const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Contract = require('./Contract'); // Ensure correct import

const Client = sequelize.define('Client', {
    ClientID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: User, key: 'UserID' }
    },
    CompanyName: { type: DataTypes.STRING, allowNull: false },
    Address: { type: DataTypes.STRING, allowNull: true },
    ContactNumber: { type: DataTypes.STRING, allowNull: true },
    ContractStartDate: { type: DataTypes.DATE, allowNull: true },
    ContractEndDate: { type: DataTypes.DATE, allowNull: true },
});

// Associations
Client.associate = (models) => {
    Client.hasMany(models.Contract, { foreignKey: 'ClientID', as: 'Contracts' });
    Client.hasMany(models.ServiceRequest, { foreignKey: 'ClientID', as: 'ServiceRequests' });
};

module.exports = Client;

// Associations
Technician.associate = (models) => {
    Technician.hasMany(models.JobAssignment, { foreignKey: 'TechnicianID', as: 'JobAssignments' });
};

module.exports = Technician;
