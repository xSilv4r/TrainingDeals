const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const login = require("./routes/api/login");

const app = express();
const db = require("./config/keys").mongoURI;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/login", login);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on ${port}`));
