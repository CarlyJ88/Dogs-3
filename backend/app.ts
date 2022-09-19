require("dotenv").config();
import express from "express";
import cors from "cors";
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

var indexRouter = require("./routes/index");
var dogsRouter = require("./routes/dogs");

var app = express();
app.use(cors())

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/dogs", dogsRouter);

export default app;
