const chalk = require('chalk');
const express = require("express");
const app = express();
const router = require('./router/router');
const cors = require("./middlewares/cors");
const logger = require('./logger/loggerService');
const lodash = require('lodash');
require('./utils/timeService');
const connectToDB = require('./cards/db/dbService')

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.static('./public'));
app.use(router);


const PORT = process.env.PORT || 8181 ; 
app.listen(PORT, ()=> {
console.log(chalk.magenta(`listening on: http://localhost:${PORT}`))
connectToDB();
});

