const loginValidation = require("./joi/loginValidation");
const registerValidation = require("./joi/registerValidation");
const userUpdateValidation = require("./joi/userUpdateValidation");
const validator = undefined || 'joi';

validateRegistration = (user)=>{
    if(validator === 'joi') return registerValidation(user)
};

validateLogin = (user)=>{
    if(validator === 'joi') return loginValidation(user)
};

module.exports = validateRegistration;
module.exports = validateLogin;

