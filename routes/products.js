const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Create Listing
router.post('/create', (req, res) => {
  res.send("Build out create");
});

// Delete List
router.post('/delete', (req, res) => {
  res.send("Build out del");
});

// Find Lisiting
router.get('/find', (req, res) => {
  res.send("Build out get");
});


module.exports = router;
