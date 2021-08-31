const Users = require('../models/users')
const  Record = require('../models/record')

// ***************************************
// Mebea's Part
// ***************************************

const getAllUsers = async (req, res) => {
    try{
        const users = await Users.find({})
        res.status(200).json({ users })
    }
    catch(error){
        res.status(500).json({msg: error})
    }
}

const getSingleUser = async(req, res) => {
    try{
        const { id:userID } = req.params
        const user = await Users.findOne({_id:userID})

        if(!user){
            return res.status(404).json({msg: `No user with id: ${id}`})
        }
        res.status(200).json({ user })
    }
    catch(error){
        res.status(500).json({msg: error})
    }
}

const updatePassword = async (req, res) => {
    try{
        const {id:userID} = req.params
        const user = await Users.findOneAndUpdate({ _id:userID }, req.body, {new:true})

        if(!user){
            return res.status(404).json({msg: `No user with id: ${id}`})
        }
        res.status(200).json({ msg: "User password is updated successfully!" })
    }
    catch (error) {
        res.status(500).json({msg: error})
    }
}

const deactivateUser = async (req, res) => {
    try{
        const {id:userID} = req.params
        const user = await Users.findOneAndDelete({ _id:userID })

        if(!user){
            return res.status(404).json({msg: `No user with id: ${id}`})
        }
        res.status(200).json({ msg: "User is deactivated successfully!" })
    }
    catch (error) {
        res.status(500).json({msg: error})
    }
}

// ***************************************
// Keiredin's Part
// ***************************************

const getRecords = async (req, res) => {
    try{
        const { userID: userID } = req.params
        const patientRecords = await Record.find({patientId: userID})
        if(!patientRecords){
            return res.status(400).json({msg:`tThere is no Patient exist with id ${userID}`})
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
        const patientRecord = await Record.find({patientId: userID,batchNumber: batchID})
        if(!patientRecord){
            return res.status(400).json({msg:`The patient doest not have record under ${batchID} batchNumber`})
        }

        res.status(200).json({patientRecord})

    }catch (error){
        res.status(500).json({msg: error})
    }
}


const createRecord = async (req, res) => {
    try{
        const record = await Record.create(req.body)
        res.status(201).json({ record }) 
    } catch(error) {
        res.status(500).json({msg:error})
    }
    
}

const searchUser = async (req, res) => {
    try{
        const users = await Users.find({name: '/req.params.name/'})
        res.status(201).json({ task })
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