const Users = require('../models/users')
const  Record = require('../models/record')

const getRecords = async (req, res) => {
    try{
        const { userID: userID } = req.params
        const patientRecords = await Record.find({paitentId: userID})
        res.status(200).json({patientRecords})
    }catch (error){
        res.status(500).json({msg: error})
    }
}

const getSingleRecord = async (req, res) => {
    try{
        const { userID: userID } = req.params
        const { batchID: batchID } = req.params
        const patientRecord = await Record.find({paitentId: userID,batchNumber: batchID})
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

const getUsers = async (req, res) => {
    try{
        const users = await Users.find({name: '/req.params.name/'})
        res.status(201).json({ task })
    }catch{
        res.status(500).json({msg:error})
    }
  }


module.exports = {
    getRecords,
    getSingleRecord,
    createRecord,
    getUsers
}