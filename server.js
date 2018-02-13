// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Set up Express
const app = express();
const PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
/* NOTE IMPORTANT
   Remember to change which static path you use
*/
// app.use(express.static(path.join(__dirname, '/app/public')));
app.use(express.static(path.join(__dirname, '/')));

// Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
