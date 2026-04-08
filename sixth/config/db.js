const mongoose = require("mongoose");

const connectDB = async () => {
    const URI = process.env.URI || "mongodb://localhost:27017/auth"

    try {
        await mongoose.connect(URI)
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log("Database connection failed, error : ", error);
    }
}

module.exports = connectDB;