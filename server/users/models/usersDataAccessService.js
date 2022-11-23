const DB = process.env.DB || "MONGODB";

const register = async (card) => {
    if (DB === "MONGODB") {
        try {
            card._id = "123456";
            return Promise.resolve(`User no. ${card._id}`)
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not in MongoDB");
};

const login = async (card) => {
    if (DB === "MONGODB") {
        try {
            // throw new Error("Login user failed");
            return Promise.resolve(`In login ${card.id}`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not in MONGODB");
};

const find = async () => {
    if (DB === "MONGODB") {
        try {
            return Promise.resolve([{ user: "yinon perets" }])
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not in MONGODB");
};

const findOne = async (id) => {
    if (DB === "MONGODB") {
        try {
            return Promise.resolve(`User no. ${id}`)
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not in MONGODB");
};

const update = async (card, id) => {
    if (DB === "MONGODB") {
        try {
         
            return Promise.resolve(`User no. ${id} updated!`);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not in MONGODB");
};

const changeIsBizStatus = async (userId, cardId) => {
    if (DB === "MONGODB") {
        try {
         
            return Promise.resolve(`User no. ${userId} with card no. ${cardId} isBusiness!`);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not in MONGODB");
};

const remove = async (id) => {
    if (DB === "MONGODB") {
        try {
     
            return Promise.resolve(`User no. ${id} deleted!`);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not in MONGODB");
};

exports.register = register;
exports.login = login;
exports.find = find;
exports.findOne = findOne;
exports.update = update;
exports.changeIsBizStatus = changeIsBizStatus;
exports.remove = remove;