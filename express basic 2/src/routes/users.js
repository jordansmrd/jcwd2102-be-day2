const express = require("express");
const router = express.Router();
const { usersController } = require("../controller");

router.get("/", usersController.getUsers);

router.post("/", usersController.addUser);

router.delete("/:userId", usersController.deleteUser);

module.exports = router;
