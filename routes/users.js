const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

// Register New User
router.post('/register', (req, res) => {
  let newUser = new User ({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    accountType: req.body.accountType
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg: `Failed to register error: ${err}`});
    } else{
      res.json({success: true, msg: `Successfuly registered ${user.username}`});
    }
  });
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
