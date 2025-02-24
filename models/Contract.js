// models/Contract.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Client = require('./Client');

const Contract = sequelize.define('Contract', {
    ContractID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ClientID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: Client, key: 'ClientID' }
    },
    ContractStartDate: { type: DataTypes.DATE, allowNull: false },
    ContractEndDate: { type: DataTypes.DATE, allowNull: false },
    IsActive: { type: DataTypes.BOOLEAN, defaultValue: true }
}, {
    timestamps: true,
    tableName: 'Contracts'
});

// Method to renew a contract
Contract.prototype.renewContract = async function(newEndDate) {
    this.ContractEndDate = newEndDate;
    await this.save();
};

module.exports = Contract;
