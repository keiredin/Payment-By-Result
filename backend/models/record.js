const mongoose = require('mongoose');
var UUID = require('node-uuid');

const RecordSchema = new mongoose.Schema({
    batch_number : {
        type: String, 
        default: UUID()
    },
    paitent_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    doctor_id : {
        type: mongoose.Schema.Types.ObjectId,
        required : true
    },
    intervention_code : {
        type : mongoose.Schema.Types.ObjectId,
    }
    
})

module.exports = mongoose.model('Record', RecordSchema)