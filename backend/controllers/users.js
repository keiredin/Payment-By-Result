const Models = require('../models/index')
const { NotFoundError,BadRequestError } = require('../errors/index')
const bcrypt = require('bcryptjs');
const { StatusCodes } = require("http-status-codes");
const { Model,isValidObjectId} = require('mongoose');
const { ObjectId } = require('mongodb');



// to check if the returned object is empty
function isEmpty(object) {  
    return Object.keys(object).length === 0
  }


const getAllUsers = async (req, res) => {
    const users = await Models.Users.find({})
    if(!users){
       throw new NotFoundError('Not Found') 
    }
    res.status(StatusCodes.OK).json({ users })
     
}

const getSingleUser = async(req, res) => {

    const { userID:userID } = req.params
    const user = await Models.Users.findById(userID)

    if(!user){
        throw new NotFoundError(`No user with id ${userID}`)  
    }
    
    return res.status(StatusCodes.OK).json({ user })         

}

const updatePassword = async (req, res) => {
    
    const {userID:userID} = req.params
    const password = req.body.password
    if (password){
        const salt = await bcrypt.genSalt(10)
        const currentUser = await Models.Users.findById(userID);
        const comparePW = await bcrypt.compare(password, currentUser.password);
        // if provided password is the same as the former password!
        if(comparePW){
            throw new BadRequestError("Provide another password");
        }
        const hashedPW = await bcrypt.hash(password, salt);
        const user = await Models.Users.findByIdAndUpdate(userID , {"password":hashedPW}, {new:true})

        if(!user){
            throw new NotFoundError(`No user with id ${userID}`)
        }
        return res.status(StatusCodes.OK).json({ msg: "User password is updated successfully!" })
    }
    else{
        throw new BadRequestError("Password is required to update!")
    }
    
}

const deactivateUser = async (req, res) => {
    const {userID:userID} = req.params
    const user = await Models.Users.findByIdAndDelete(userID)

    if(!user){
        throw new NotFoundError(`No user with id ${userID}`)
    }
    res.status(StatusCodes.OK).json({ msg: "User is deactivated successfully!" })  
}

const getRecords = async (req, res) => {
    
    const { userID: userID } = req.params
    const patientRecords = await Models.Record.aggregate([
        {$match: {patientId: ObjectId(userID)}},
        {$project: {patientId:1,batchNumber:1}},
        {$group:
             {_id:"$patientId",
             batches: {$addToSet:"$batchNumber"},
            }}
    ])
    if(isEmpty(patientRecords)){
        throw new NotFoundError(`There is no Patient exist with id ${userID}`)
    }

    res.status(StatusCodes.OK).json({patientRecords})
    
}

const getSingleRecord = async (req, res) => {
    
    const { userID: userID } = req.params
    const { batchID: batchID } = req.params
    
    // const patientRecord = await Models.Record.find({patientId: userID,batchNumber: batchID})
    const patientRecord = await Models.Record.aggregate([
        {$match: { patientId: ObjectId(userID), batchNumber: batchID}},
        {$project: {patientId:1,batchNumber:1}},
        // {$group:
        //      {_id:"$patientId",
        //      batches: {$addToSet:"$batchNumber"},
        //     }}
    ])
    if(isEmpty(patientRecord)){
        throw new NotFoundError(`The patient doesn't not have record under batchNumber ${batchID}`)
    }
    console.log(typeof(patientRecord))
    

    res.status(StatusCodes.OK).json({patientRecord})
}


const createRecord = async (req, res) => {
    const record = await Models.Record.create(req.body)
    res.status(StatusCodes.CREATED).json({ record })  
}

const searchUsers = async (req, res) => {
    
    const {name:name} = req.query
    const users = await Models.Users.find({name: {$regex: `${name}`, $options: "i"}})
    if(!users){
        throw new NotFoundError('User Not Found')
    }
    res.status(StatusCodes.OK).json({ users })
    
}


module.exports = {
    getAllUsers,
    getSingleUser,
    updatePassword,
    deactivateUser,
    getRecords,
    getSingleRecord,
    searchUsers,
    createRecord,
    
}