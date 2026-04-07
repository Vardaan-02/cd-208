const User = require("../models/User")

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // gets All users findAll can also work

        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = getAllUsers;