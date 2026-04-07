const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config(); // to load vairables form .env

const PORT = process.env.PORT || 3020;

const app = express();
app.use(express.json()); // middleware for pasing and converting to json

connectDB();

app.get("/health", (req, res) => {
    res.send("Server is healthy");
});

const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})