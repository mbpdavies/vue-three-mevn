const express = require("express");

// import model
const userModel = require("../models/User");

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  userModel.find({}, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.send(users);
    }
  });
});

module.exports = userRoutes;
