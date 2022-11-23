const mongoose = require('mongoose');
const cardSchema = require(`../models/mongodb/card`);


const DB = process.env.DB || "MONGODB";

const find = async ()=>{
    if(DB === "MONGODB"){
        try {
            return Promise.resolve([{cards: "in mongodb"}])
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb");
};

const findOne = async (id)=>{
    if(DB === "MONGODB"){
        try {
            return Promise.resolve(`in findOne cards no: ${id}`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("not in mongodb");
};


const create = async (normalizeCard)=>{
    if(DB === "MONGODB"){
        try {
            const card = new cardSchema(normalizeCard);
            await card.save();
            return Promise.resolve(card);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("not in mongodb");
};

const remove = async (id)=>{
    if(DB === "MONGODB"){
        try {
             card.id = "4567787";
            return Promise.resolve(`cards no: ${card.id} deleted`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("not in mongodb");
};

const update = async (card, id) => {
    if (DB === "MONGODB") {
        try {
            return Promise.resolve(`Card no. ${id} updated!`);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not in MongoDB");
};

const like = async (userId, cardId) => {
    if (DB === "MONGODB") {
        try {
            return Promise.resolve(`User ${userId} with card no. ${cardId} liked!`);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not in MongoDB");
};

 
exports.find = find;
exports.findOne = findOne;
exports.create = create;
exports.remove = remove;
exports.update = update;
exports.like = like;

