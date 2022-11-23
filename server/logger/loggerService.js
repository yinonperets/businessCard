const express = require('express');
const app = express();
const morganLogger = require('./loggers/morganLoggers');


const LOGGER = "morgan";

if (LOGGER === "morgan") app.use(morganLogger);

module.exports = app;