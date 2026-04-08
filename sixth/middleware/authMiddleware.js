const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "MY_JWT_SECRET_123";

const protectRoute = (req, res, next) => {
    const authHeader = req.header("Authorization"); // Fix 3 : syntax issue

    // authorization: "Bearer token" // format of header

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ sucess: false, message: "Not authorized, no token provided" })
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = decoded;

        next();
    }
    catch (error) {
        res.status(401).json({ sucess: false, message: "Not authorized, incorrect token" })
    }
}

module.exports = protectRoute;