const mongoose = require('mongoose');

const degreeSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    credits: { type: Number, required: true, min: 1 },
    duration: { type: Number, required: true, min: 1 },
    faculty: { type: String }
});

const Degree = mongoose.model('Degree', degreeSchema); // Model name should match "ref" in Student

module.exports = Degree;