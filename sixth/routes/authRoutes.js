const { register_user, login_user } = require("../controllers/authControllers");

const express = require('express');

const router = express.Router();

router.post('/register', register_user);

router.post('/login', login_user);

module.exports = router;