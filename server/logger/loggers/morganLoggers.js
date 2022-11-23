const currentTime = require("../../utils/timeService");
const chalk = require('chalk');
const morgan = require('morgan');



const morganLogger = morgan((tokens, req, res)=>{
    const { year, month, day, hour, minute, seconds } = currentTime();
    const currentDate = `[${year}-${month}-${day} ${hour}:${minute}:${seconds}]`;

    if(tokens.status(req, res) >= 400) return chalk.redBright([
        currentDate,
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' '));

    return chalk.cyanBright([
        currentDate,
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' '));
});

module.exports = morganLogger;