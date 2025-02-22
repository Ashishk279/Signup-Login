const mongoose = require('mongoose');

const signUpSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("signup", signUpSchema)