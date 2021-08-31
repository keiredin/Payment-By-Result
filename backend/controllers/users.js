const Models = require('../models/index')
const {
    NotFoundError,
    BadRequestError,
} = require('../errors/index')
const bcrypt = require('bcryptjs');

const getAllUsers = async (req, res) => {
    try{
        const users = await Models.Users.find({})
        res.status(200).json({ users })
    }
    catch(error){
        res.status(500).json({msg: error})
    }
}

const getSingleUser = async(req, res) => {
    try{
        const { userID:userID } = req.params
        const user = await Models.Users.findById(userID)

        if(user){
            return res.status(200).json({ user })
        }
        else{
            throw new NotFoundError(`No user with id ${userID}`)
        }        
    }
    catch(error){
        res.status(500).json({msg: error})
    }
}

const updatePassword = async (req, res) => {
    try{
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
            return res.status(200).json({ msg: "User password is updated successfully!" })
        }
        else{
            throw new BadRequestError("Password is required to update!")
        }
    }
    catch (error) {
        res.status(500).json({msg: error})
    }
}

const deactivateUser = async (req, res) => {
    try{
        const {userID:userID} = req.params
        const user = await Models.Users.findByIdAndDelete(userID)

        if(!user){
            throw new NotFoundError(`No user with id ${userID}`)
        }
        res.status(200).json({ msg: "User is deactivated successfully!" })
    }
    catch (error) {
        res.status(500).json({msg: error})
    }
}

const getRecords = async (req, res) => {
    try{
        const { userID: userID } = req.params
        const patientRecords = await Models.Record.find({patientId: userID})
        if(!patientRecords){
            return res.status(400).json({msg:`There is no Patient exist with id ${userID}`})
        }

        res.status(200).json({patientRecords})
    }catch (error){
        res.status(500).json({msg: error})
    }
}

const getSingleRecord = async (req, res) => {
    try{
        const { userID: userID } = req.params
        const { batchID: batchID } = req.params
        const patientRecord = await Models.Record.find({patientId: userID,batchNumber: batchID})
        if(!patientRecord){
            throw new BadRequestError(`The patient doesn't not have record under ${batchID} batchNumber`)
        }

        res.status(200).json({patientRecord})

    }catch (error){
        res.status(500).json({msg: error})
    }
}


const createRecord = async (req, res) => {
    try{
        const record = await Models.Record.create(req.body)
        res.status(201).json({ record }) 
    } catch(error) {
        res.status(500).json({msg:error})
    }
    
}

const searchUser = async (req, res) => {
    try{
        const {name:name} = req.query
        console.log(name)
        const users = await Users.find({name: {$regex: `${name}`, $options: "i"}})
        res.status(200).json({ users })
    }
    catch{
        res.status(500).json({msg:error})
    }
}


module.exports = {
    getAllUsers,
    getSingleUser,
    updatePassword,
    deactivateUser,
    getRecords,
    getSingleRecord,
    createRecord,
    searchUser
}