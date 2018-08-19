const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Register New User
router.post('/register', (req, res) => {
  res.send("Build out register");
});

// Delete User
router.post('/delete', (req, res) => {
  res.send("Build out delete");
});

//Authenticate User
router.get("/profile", passport.authenticate("jwt", {session: false}), (req, res, next) => {
  res.json({user: req.user});
});


module.exports = router;
