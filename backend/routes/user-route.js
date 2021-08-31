const express = require('express')
const router = express.Router()

const {
    getAllUsers,
    getSingleUser,
    updatePassword,
    deactivateUser,
} = require('../controllers/user')

