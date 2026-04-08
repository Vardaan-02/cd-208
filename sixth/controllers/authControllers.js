const authService = require("../services/authService");

const register_user = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await authService.register(email, password);
        res.status(201).json({ sucess: true, data: user });
    }
    catch (error) {
        res.status(400).json({ sucess: false, error: error.message });
    }
}

const login_user = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);

        res.status(200).json({ sucess: true, data: result });
    } catch (error) {
        res.status(400).json({ sucess: false, error: error.message });
    }
}

module.exports = {
    login_user, register_user
}