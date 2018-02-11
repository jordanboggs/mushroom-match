// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Set up Express
const app = express();
const PORT = 3000;

// Routing
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});
