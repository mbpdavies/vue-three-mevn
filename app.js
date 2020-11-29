const express = require("express");
const app = express();
const port = 3000;

// connect to mongodb
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://vuethree:vuethree@cluster0.xo538.mongodb.net/MEVN-app?retryWrites=true&w=majority",
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
