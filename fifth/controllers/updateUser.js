const User = require("../models/User");

const updateUser = async (req, res) => {
    const email = req.params.email;

    const { age } = req.body;

    try {
        const user = await User.findOneAndUpdate({
            email
        }, {
            age
        }, {
            new: true, runValidators: true,
        });

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "sucessfully updated" });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = updateUser;