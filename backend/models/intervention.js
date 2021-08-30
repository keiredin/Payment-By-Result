const mongoose = require('mongoose');


const InterventionSchema = new mongoose.Schema({
    cptCode : {
        type : Number,
        required : true
    }
    description : {
        type: String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
    
})

module.exports = mongoose.model('Intervention', InterventionSchema)