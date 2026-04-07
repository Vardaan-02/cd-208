const express = require("express");
const createUser = require("../controllers/createUser");
const deleteUser = require("../controllers/deleteUser");
const getAllUsers = require("../controllers/getAllUsers");
const getUser = require("../controllers/getUser");
const updateUser = require("../controllers/updateUser");

const router = express.Router();

router.post("/create-user", createUser); // creating user // working

router.get("/get-all-users", getAllUsers); // gets all users // working

router.get("/get-user/:email", getUser); // get user with email // working

router.put("/update-user/:email", updateUser) // updates user // working

router.delete('/delete-user/:email', deleteUser) // delete user // working

module.exports = router;