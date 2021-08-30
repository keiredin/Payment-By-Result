const mongoose = require('mongoose');


const DueSchema = new mongoose.Schema({
    batch_number : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    is_paid : {
        type : Boolean,
        required : true
    }
    date : {
        type : Date,
        default : Date.now
    }
    
})

module.exports = mongoose.model('Due', DueSchema)