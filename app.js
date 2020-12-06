const express = require("express");
const app = express();
const path = require("path");
// load .env file
require("dotenv").config();
// get PORT from env file
const port = process.env.PORT;

// connect to mongodb
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xo538.mongodb.net/MEVN-app?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mongo DB Connected!");
    }
  }
);

// parse request/response as JSON
app.use(express.json());

//set static assets path for Vue client
app.use(express.static(path.join(__dirname, "./client/vue-three/dist")));

// users controller
const userRoutes = require("./controllers/users");
app.use("/users", userRoutes);

// default all other get requests to Vue index file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/vue-three/dist"));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
