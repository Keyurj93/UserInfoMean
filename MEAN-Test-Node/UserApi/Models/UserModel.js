const mongoose = require("mongoose");

const user = mongoose.model(
    "UserInfo",
    new mongoose.Schema({
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: Number,
            required: true
        }
    })
);

exports.UserModel = user;
