const { required } = require('joi');
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true
    },
    email : {
        type: String,
    },
    role : {
        type: String,
        required: true
    },
    profileImage : {
        type: String,
    },
    phone : {
        type: String,
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    speciality : {
        type: String,
    },
    createdAt : {
        type: Date,
        defaultStatus: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)
