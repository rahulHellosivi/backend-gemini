require('dotenv').config();
const express = require('express');
const services = require('./services.js');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

services.init();

// Define a simple route
app.get('/', async (req, res) => {
    console.log('/ route hit', req.query);

    const prompt = req.query.prompt;

    const result = await services.chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();

    res.send(text);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
