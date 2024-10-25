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

app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(200).json({ myMovies:movies });
});

const path = require('path');

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


