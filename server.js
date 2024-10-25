// Import the express module
const express = require('express');
const app = express();
const port = 3000;

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).send('Something went wrong!'); 
});

// Set up a route for the root URL ('/')
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

// Add a route that accepts a name parameter in the URL
app.get('/hello/:name/:surname', (req, res) => {
    //const name = req.params.name; 
    res.send('Hello ' +req.params.name+ " " +req.params.surname); 
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


