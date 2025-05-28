const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    _id: { type: String, required: true },
     title: { type: String, required: true },
     employeeIds: [{ type: String, ref: 'Employee', required: true }]
    
});

const Project = mongoose.model('Project', projectSchema); // Model name should match ref

module.exports = Project; 