const { handleError , handleJoiError} = require("../../utils/handleError");
const {
  find,
  findOne,
  create,
  update,
  remove,
  like,
} = require("../models/cardsAccessDataService");
const validateCard = require("../validation/cardValidationService");
const normalizeCard = require("../helpers/normalizeCard");

const getCards = async () => {
  try {
    const cards = await find();

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

const getCard = async (id) => {
  try {
    const card = await findOne(id);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};


const createCard = async (rawCard) => {
    const { error } = validateCard(rawCard);
    if (error) return handleJoiError(error);
    try {
        let card = normalizeCard(rawCard);
        card = await create(card);
        return Promise.resolve(card);
    } catch (error) {
        return Promise.reject(error);
    }
};



const deleteCard = async (id) => {
  card = await remove(id);
  try {
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateCard = async (rawCard, id) => {
  try {
    let card = { ...rawCard };
    card = await update(card, id);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

const likeCard = async (userId, cardId) => {
  try {
    const card = await like(userId, cardId);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getCards = getCards;
exports.getCard = getCard;
exports.createCard = createCard;
exports.deleteCard = deleteCard;
exports.updateCard = updateCard;
exports.likeCard = likeCard;

