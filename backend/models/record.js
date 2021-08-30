const mongoose = require('mongoose');


const RecordSchema = new mongoose.Schema({
    batch_number : {
        type: Number,
        required: true,
    },
    paitent_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    doctor_id : {
        type: mongoose.Types.ObjectId,
        required : true
    },
    intervention_code : {
        type : mongoose.Types.ObjectId,
    }
    
})

module.exports = mongoose.model('Record', RecordSchema)