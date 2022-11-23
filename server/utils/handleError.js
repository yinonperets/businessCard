const chalk = require('chalk');

const handleError = (res, status, message) => {
  console.log(chalk.redBright(message));
  return res.status(status).send(message);
};

const handleJoiError = async error => {
    const joiError = new Error(error.details[0].message);
    return handleBadRequest("joi", joiError);
};

module.exports = { handleError, handleJoiError};        341995