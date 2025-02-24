const Queue = require('bull');

const serviceRequestQueue = new Queue('service-request');

serviceRequestQueue.process(async (job) => {
    // Process job here
    console.log(`Processing service request for client ${job.data.clientId}`);
});

// Add job to the queue
serviceRequestQueue.add({ clientId: req.user.id });
