const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/db');
require('dotenv').config();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import Routes
const serviceRequestRoutes = require('./routes/serviceRequests'); 

// Use Routes
app.use('/api/service-requests', serviceRequestRoutes); 

// Database Authentication and Synchronization
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    return sequelize.sync(); 
  })
  .then(() => {
    console.log('Database synchronized successfully.');

    // Start Server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
  
// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});
