const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./Routes/UserRoutes");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRoutes);
app.use(express.static(path.join(__dirname, "./Assits/")));

// Home Route
app.get("/", (req, res) => {
  res.send("home page");
});

// Error Route
app.use((req, res, next) => {
  res.send("<h1>Route Not Fount...</h2>");
});

// Error Server
app.use((req, res, next, err) => {
  if (err) {
    return err;
  } else {
    res.send("your server get error");
  }
});

module.exports = app;
