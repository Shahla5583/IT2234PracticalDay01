const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    date_of_birth: { type: Date },
    gender: { type: String, required: true },
    degreeID: { type: mongoose.Schema.Types.String,       ref: 'Degree', required: true } // Reference to Degree model
});

const Student = mongoose.model('Student', studentSchema); // Model name should match ref

module.exports = Student; 