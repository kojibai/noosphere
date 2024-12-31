// connectors/express_connector/connector.js

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// Configuration
const NOOSPHERE_URL = process.env.NOOSPHERE_URL || 'http://localhost:8000';
const CONNECTOR_NAME = process.env.CONNECTOR_NAME || 'express_connector';

app.use(bodyParser.json());

app.post('/api/handle_request', async (req, res) => {
    /**
     * Endpoint to handle incoming requests from Noosphere.
     */
    const data = req.body;
    // Example: Process the request and respond
    // Modify this logic based on your backend service requirements
    const processedData = {
        status: 'success',
        message: `Request processed by ${CONNECTOR_NAME}`,
        data_received: data
    };
    res.status(200).json(processedData);
});

app.get('/health', (req, res) => {
    /**
     * Health check endpoint.
     */
    res.status(200).json({ status: 'healthy' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`${CONNECTOR_NAME} is running on port ${PORT}`);
});
