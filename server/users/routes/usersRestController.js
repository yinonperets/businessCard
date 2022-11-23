const express = require("express");
const { handleError } = require("../../utils/handleError");

const { registerUser, getUsers, getUser, updateUser, changeUserBusinessStatus, deleteUser } = require("../sevices/userService");
const { loginUser } = require("../models/usersDataAccessService");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const user = await registerUser(req.body)
        res.status(201).send(user);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await loginUser(req.body);
        return res.status(201).send(user);
    } catch (error) {
        return handelError(res, error.status || 500, error.message);
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await getUsers();
        return res.send(users);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUser(id);
        return res.send(user);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await updateUser(req.body, id);
        return res.status(201).send(user);
    } catch (error) {
        return handelError(res, error.status || 500, error.message);
    }
});

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await changeUserBusinessStatus(id);
        return res.status(201).send(user);
    } catch (error) {
        return handelError(res, error.status || 500, error.message);
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await deleteUser(id);
        return res.status(200).send(user);
    } catch (error) {
        return handelError(res, error.status || 500, error.message);
    }
});

module.exports = router;