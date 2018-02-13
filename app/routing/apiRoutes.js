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

  app.post("/api/new", function(req, res) {
    let answers = req.body.quiz;
    console.log(answers);
    // function that matches your answers with each character
    let modalHtml = matchCharacter(answers);
    res.json(modalHtml);
    console.log(modalHtml);
  });

  function matchCharacter(answers) {
    // This array will hold the total difference for each character
    // Each index matches to an index in friends array
    let tests = [];

    // Let's run through each character in friends and compare
    friends.forEach(person => {
      const scores = person.scores;
      // Keep track of total difference
      let totalDifference = 0;

      // Compare each score
      for (let i = 0; i < answers.length; i++) {
        let difference = Math.abs(answers[i] - scores[i]);
        totalDifference += difference;
      }

      // Push totalDifference to tests array
      tests.push(totalDifference);
    });

    // Find the lowest match. Lower index is tie-breaker
    let match = false;
    let bestMatch = 0;
    do {
      for (let i = 0; i < tests.length; i++) {
        if (tests[i] === bestMatch) {
          match = true;
          const name = friends[i].name;
          const photo = friends[i].photo;
          return {
            name: name,
            photo: photo
          };
        }
      }
      bestMatch++;
    }
    while (!match);
  }
};
