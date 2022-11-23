
const joi = require('joi');

const loginValidation = (user)=>{
const userSchema = joi.object({
    email:joi.string().ruleset.regex(/.+@.+\..{2,}/).rule({ message:"Please enter a valid email"}).required(),
     password: joi.string().min(6).ruleset.regex(
/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/).rule({message:"The password must include at least six characters uppercase and lowercase letter number and one of the following special characters: !@#$%^&*-"}).required()
})
};

exports.loginValidation = loginValidation;