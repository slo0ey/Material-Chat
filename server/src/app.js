const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const api = require("./routes");

const app = express();

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {
  dbName: process.env.MONGO_DBNAME,
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", api);

module.exports = app;
