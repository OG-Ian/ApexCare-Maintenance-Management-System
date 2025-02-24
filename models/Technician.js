const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Technician = sequelize.define('Technician', {
    TechnicianID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: User, key: 'UserID' }
    },
    Specialization: { type: DataTypes.STRING, allowNull: false },
    SkillLevel: { type: DataTypes.ENUM('Junior', 'Mid-level', 'Senior'), allowNull: false },
    AvailabilityStatus: { type: DataTypes.STRING, defaultValue: 'Available' },
});

module.exports = Technician;