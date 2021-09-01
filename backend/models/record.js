const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
  batchNumber: {
    type: String,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  interventionCode: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Record", RecordSchema);
