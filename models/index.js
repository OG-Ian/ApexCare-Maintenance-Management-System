const sequelize = require('../config/db');
const User = require('./User');
const Client = require('./Client');
const Technician = require('./Technician');

// Define associations
User.hasOne(Client, { foreignKey: 'UserID' });
Client.belongsTo(User, { foreignKey: 'UserID' });

User.hasOne(Technician, { foreignKey: 'UserID' });
Technician.belongsTo(User, { foreignKey: 'UserID' });

module.exports = { sequelize, User, Client, Technician };
