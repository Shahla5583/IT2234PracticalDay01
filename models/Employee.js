const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    position: {type: String, required: true },
    projectIds: [{ type: String, ref: 'Project', required: true }], 
    departmentId: { type: mongoose.Schema.Types.String,ref: 'Department', required: true },
    etfId: { type: mongoose.Schema.Types.String,ref: 'Etf', required: true }  // Reference to Degree model
});

const Employee = mongoose.model('Employee', employeeSchema); // Model name should match ref

module.exports = Employee; 