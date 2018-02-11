// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Set up Express
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
