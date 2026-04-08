const mongoose = require("mongoose"); // this module helps to communicate with database
const bcrypt = require("bcryptjs"); // used for hashing

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

// frontende -> middleware -> backend -> pre -> database

// Hash password before saving
userSchema.pre('save', async function () { // fix 1 : async and next are not used simutanously
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(8);

    this.password = await bcrypt.hash(this.password, salt); // hashing
});

// during login 
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password); // password is hashed again to match with stored password
}

module.exports = mongoose.model("User", userSchema);