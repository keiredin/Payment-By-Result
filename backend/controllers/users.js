const Users = require('../models/users')
const  Record = require('../models/record')

const getRecord = async (req, res) => {
    try{
        const { id: userID } = req.params
        const patientRecords = await Record.find({paitentId: userID})
        res.status(200).json({patientRecords})
    }catch (error){
        res.status(500).json({msg: error})
    }
}

const getSingleRecord = async (req, res) => {
    try{
        const { id: userID } = req.params
        const { id: batchID } = req.params
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


module.exports = {
    getRecord,
    getSingleRecord,
    createRecord,
}