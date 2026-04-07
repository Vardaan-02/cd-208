const User = require("../models/User");

const deleteUser = async (req, res) => {
    try {
        const email = req.params.email;

        const user = await User.findOneAndDelete({ email: email }); // finds and delete user if found

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "sucessfully deleted" });

    } catch (err) {
        res.status(501).json({ message: err });
    }
}

module.exports = deleteUser;