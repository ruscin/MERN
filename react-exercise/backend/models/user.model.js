const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4
    },
},{
    timestamps: true
})

const User = mongoose.mode("User", userSchema);

module.exports = User;