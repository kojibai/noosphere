import dotenv from 'dotenv';
dotenv.config(); // Load .env variables

import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const backends = {
    analytics: 'http://localhost:5000',
    chat: 'http://localhost:3000',
};

async function classifyIntent(userInput) {
    try {
        const response = await fetch('http://localhost:5001/classify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input: userInput }),
        });
        const result = await response.json();
        console.log("AI Server Response:", result);
        return result.intent || 'unknown';
    } catch (error) {
        console.error('Error contacting AI server:', error);
        return 'unknown';
    }
}

app.post('/api', async (req, res) => {
    const { userInput } = req.body;
    console.log("Received User Input:", userInput);

    const intent = await classifyIntent(userInput);
    console.log("Resolved Intent:", intent);

    if (backends[intent]) {
        console.log("Routing to Backend:", backends[intent]);
        res.send({ message: `Request routed to ${backends[intent]}` });
    } else {
        console.log("Service not found for intent:", intent);
        res.status(404).send({ error: 'Service not found' });
    }
});

// Export the app for testing
export default app;

// Start the server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Noosphere middleware running on port ${PORT}`);
    });
}
