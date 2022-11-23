const express = require("express")
const router = express.Router();
const cardsRestController = require('../cards/routes/cardsRestController');
const { handleError } = require("../utils/handleError");
const usersRestController = require('../users/routes/usersRestController')

router.use('/cards', cardsRestController);
router.use('/users', usersRestController);

router.use((req,res)=>{
    handleError(res,404, "page not found!")
});

module.exports = router;