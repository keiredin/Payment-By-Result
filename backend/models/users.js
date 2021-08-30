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
    profile_image : {
        type: String,
    },
    phone : {
        type: String,
    },
    date_of_birth: {
        type: Date
        required: true
    },
    speciality : {
        type: String,
    },
    created_at : {
        type: Date,
        defaultStatus: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)
