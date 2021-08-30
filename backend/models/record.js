const mongoose = require('mongoose');
var UUID = require('node-uuid');

const RecordSchema = new mongoose.Schema({
    batchNumber : {
        type: String, 
        required: true
    },
    paitentId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    doctorId : {
        type: mongoose.Schema.Types.ObjectId,
        required : true
    },
    interventionCode : {
        type : mongoose.Schema.Types.ObjectId,
    }
    
})

module.exports = mongoose.model('Record', RecordSchema)