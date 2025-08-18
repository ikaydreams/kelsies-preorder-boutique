const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 100,
        match: /^\S+@\S+\.\S+$/
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
