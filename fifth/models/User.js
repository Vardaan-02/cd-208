const mongoose = require("mongoose");

// schema is a blueprint
// model is actual store

const userSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
}, { timestamps: true }); // automtically stores createdAt and updatedAt

module.exports = mongoose.model('User', userSchema); // convert schema to a model