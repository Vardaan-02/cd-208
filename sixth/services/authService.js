const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET || "MY_RANDOM_SECRET_123";

const register = async (email, password) => {
    const existing_user = await User.findOne({ email });

    if (existing_user) throw new Error("Email already exists");

    const user = new User({ email, password });
    await user.save();

    return { id: user._id, email: email }
}

const login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) throw new Error("Invalid Email");

    const isMatch = await user.comparePassword(password); // Fix 2 : speeling mistake

    if (!isMatch) throw new Error("Invalid Password");

    const token = jwt.sign(
        { id: user._id, email: user.email },
        JWT_SECRET,
        { expiresIn: '7d' },
    );

    return { token, user: user._id, email: user.email };
}

module.exports = {
    login, register
}