const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
     location: { type: String, required: true },
     employeeIds: [{ type: String, ref: 'Employee', required: true }]
    
});

const Department = mongoose.model('Department', departmentSchema); // Model name should match ref

module.exports = Department; 