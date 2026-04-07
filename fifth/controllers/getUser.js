const User = require("../models/User");

const getUser = async (req, res) => {
    try {
        const email = req.params.email;

        const user = await User.findOne({
            email
        });

        if (!user) res.status(404).json({ message: "user not found" });

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message : err })
    }
}

module.exports = getUser;