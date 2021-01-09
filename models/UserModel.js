const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true,
        max: 255,  
    },
    username: {
        type: String,
        required: true,
        max: 255,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 255
    },
    profilePic: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Users", UserSchema); 