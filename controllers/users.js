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

userRoutes.post("/", (req, res) => {
  const user = new userModel(req.body);
  user.save().then((doc) => res.send(doc));
});

module.exports = userRoutes;
