// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const friends = require('../data/friends.js');

// Routing
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
};
