// Import the sequelize instance from db.js
const sequelize = require('./config/db.js');

// Test the connection to the database
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  })
  .finally(() => {
    // Close the connection when done testing
    sequelize.close();
  });
