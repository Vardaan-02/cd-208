const express = require("express");
require("dotenv").config();
const protectRoute = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
app.use("/auth", authRoutes);

app.get('/normal-request', protectRoute, (req, res) => {
    res.send("HELLO WORLD");
})

const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`)
})

connectDB();