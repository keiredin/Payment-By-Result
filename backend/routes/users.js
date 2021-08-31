const express = require('express')
const { getRecords, getSingleRecord, createRecord, getUsers} = require('../controllers/users')
const router = express.Router()




router.route('/:userID/records').get(getRecords).post(createRecord)
router.route('/:userID/records/:batchID').get(getSingleRecord)
router.route('/:userID').get(getUsers)


module.exports = router