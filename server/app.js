const express = require("express");
const cors = require("cors");
const router = require("./routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

const app = express();

var corsOptions = {
  methods: 'GET,POST',
  optionsSuccessStatus: 200,
  origin: '*'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);



app.all("*", (req, res, next) => {
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});

app.use(errorHandler);

const PORT = 8080;
app.listen(PORT, () => {
 console.log(`server running on port ${PORT}`);
});

module.exports = app;

// This is simple server for basic backend using express framework if none of these run, make sure to 'npm intsall'.
// This server work with only nodejs and **mysql** so, set those up beforehand!
// database use case:
// CREATE TABLE user (username varchar(255), password varchar(255));
// CREATE TABLE answersheet (submitdate datetime, path varchar(255));
// Test on localhost:8080, If VM(AWS?) on <ipv4>:8080

// To run this server simply 'node app.js'
// Good Luck! (っ◔◡◔)っ ❤