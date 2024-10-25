// Import the express module
const express = require('express');
const app = express();
const port = 3000;

// Set up a route for the root URL ('/')
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});