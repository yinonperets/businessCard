const validateCardWithJoi = require("./joi/validateCardWithjoi");
const validator = undefined || 'joi';


const validateCard = (card) => {
if (validator=== 'joi') return validateCardWithJoi(card)
};

module.exports = validateCard;

