const mongoose = require('mongoose');

const etfSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    etfNumber:{ type: String, required: true },
     amount: { type:Number, required: true },
     employeeId: { type: mongoose.Schema.Types.String,ref: 'Employee', required: true }
     
});

const Etf = mongoose.model('Etf', etfSchema); // Model name should match ref

module.exports = Etf; 