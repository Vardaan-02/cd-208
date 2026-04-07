const User = require("../models/User"); // User model form models

const createUser = async (req, res) => {
    try {
        const { name, age, email } = req.body; // get params from req

        const user = await User.create({ // creates users
            name,
            age,
            email
        })

        res.status(201).json({ "user :": user });
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
}

module.exports = createUser;