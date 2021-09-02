const express = require('express')
const { 
    getAllUsers,
    getSingleUser,
    updatePassword,
    deactivateUser,
    getRecords, 
    getSingleRecord, 
    createRecord, 
    searchUsers,
} = require('../controllers/users')
const router = express.Router()



router.route('/:userID').get(getSingleUser).patch(updatePassword).delete(deactivateUser)
router.route('/search/user').get(searchUsers)
router.route('/:userID/records').get(getRecords).post(createRecord)
router.route('/:userID/records/:batchID').get(getSingleRecord)
router.route('/').get(getAllUsers)


module.exports = router