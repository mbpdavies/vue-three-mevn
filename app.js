const express = require("express");
const app = express();
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

// users controller
const userRoutes = require("./controllers/users");
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
