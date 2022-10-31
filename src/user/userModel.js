// <------- Imports ------->

const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

// <------- User Model ------->

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

// <------- Exports ------->

module.exports = User;
