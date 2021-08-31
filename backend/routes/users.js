const express = require('express')
const { 
    getAllUsers,
    getSingleUser,
    updatePassword,
    deactivateUser,
    getRecords, 
    getSingleRecord, 
    createRecord, 
    searchUser
} = require('../controllers/users')
const router = express.Router()


router.route('/:userID/records').get(getRecords).post(createRecord)
router.route('/:userID/records/:batchID').get(getSingleRecord)
router.route('/:username').get(searchUser)
router.route('/').get(getAllUsers)
router.route('/:userID').get(getSingleUser).patch(updatePassword).delete(deactivateUser)


module.exports = router