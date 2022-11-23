const express = require("express");
const router = express.Router()
const chalk = require("chalk");
const { handleError } = require("../../utils/handleError");
const { getCard , createCard, updateCard, deleteCard, likeCard} = require("../service/cardService");
const { remove } = require("../models/cardsAccessDataService");

// id //
router.get("/:id", async (req,res)=>{
    const {id} = req.params;
try {
    const card = await getCard(id);
    return res.send(card)
} catch (error) {
    return handleError(res, error.status || 500 , error.message)
}
});

//createCard
router.post("/", async (req,res)=>{
try {
const card = await createCard(req.body)
return res.send(card)

} catch (error) {
    return handleError(res, error.status || 500 , error.message)
}
});


// delete
router.delete("/", async (req,res)=>{
const {id} = req.params;
card = {...deleteCard};
try {
const card = await deleteCard(req.body)
return res.send(card)

} catch (error) {
    return handleError(res, error.status || 500 , error.message)
}
});

//updateCard
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const card = await updateCard(req.body, id);
        return res.status(201).send(card);
    } catch (error) {
        return handelError(res, error.status || 500, error.message);
    }
});

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const userId = "123456";
   
    try {
        const card = await likeCard(userId, id);
        return res.status(201).send(card);
    } catch (error) {
        return handelError(res, error.status || 500, error.message);
    }
});



module.exports = router;

