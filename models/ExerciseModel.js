import mongoose from "mongoose"; 

const Exercise = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})