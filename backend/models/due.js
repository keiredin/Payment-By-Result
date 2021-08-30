const mongoose = require('mongoose');


const DueSchema = new mongoose.Schema({
    batchNumber : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    isPaid : {
        type : Boolean,
        required : true
    }
    date : {
        type : Date,
        default : Date.now
    }
    
})

module.exports = mongoose.model('Due', DueSchema)