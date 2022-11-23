const { register, login, find, findOne, update, changeIsBizStatus, remove } = require("../models/usersDataAccessService");
const validateRegistration = require('../validations/joi/registerValidation');
const registerUser = async (rawUser) => {
const { error } = validateRegistration(rawCard);
    try {
        if(error){
         console.log(error.details[0].message);

        }else{
         let user = { ...rawUser };
        user.createAt = new Date().toLocaleTimeString()
        user = await register(user);
        return Promise.resolve("success!")

        }
      
    } catch (error) {
        return Promise.reject(error);
    }
};

const loginUser = async (user) => {
    try {
        user = await login(user);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

const getUsers = async (id) => {
    try {
        const users = await find(id);
        return Promise.resolve(users)
    } catch (error) {
        return Promise.reject(error);
    }
};

const getUser = async (id) => {
    try {
        const user = await findOne(id);
        return Promise.resolve(user)
    } catch (error) {
        return Promise.reject(error);
    }
};

const updateUser = async (rawUser, id) => {
    try {
        let user = { ...rawUser };
        user = await update(user, id);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

const changeUserBusinessStatus = async (userId) => {
    try {
        const user = await changeIsBizStatus(userId);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

const deleteUser = async (id) => {
    try {
        const user = await remove(id);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
exports.deleteUser = deleteUser;