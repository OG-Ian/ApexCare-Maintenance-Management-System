// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  // handles file paths
const twilio = require('twilio');  // includes Twilio

const app = express();
const port = 5000;

// Twilio Credentials
const accountSid = 'AC8ed0833bee30eabcaec6412698a394ac';   
const authToken = '3f0852cc5bfbd39df88acdaceab549e9';     
const twilioNumber = '+18646893613'; 

// Initialize Twilio client
const client = twilio(accountSid, authToken);

app.use(bodyParser.json());

// Route to serve smsForm.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'smsForm.html'));
});

// SMS API route that sends SMS
app.post('/api/send-sms', (req, res) => {
    const { technicianNumber, message } = req.body;

    // Send SMS using Twilio
    client.messages
        .create({
            body: message, // The message content
            from: twilioNumber, // Your Twilio number
            to: technicianNumber // Technician's phone number
        })
        .then((message) => {
            console.log(`SMS sent successfully: ${message.sid}`);
            res.json({ message: 'SMS has been successfully sent!' });
        })
        .catch((error) => {
            console.error('Error sending SMS:', error);
            res.status(500).json({ error: 'Failed to send SMS' });
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
