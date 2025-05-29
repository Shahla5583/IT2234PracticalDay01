const express = require('express');
const router = express.Router();
const Department = require('../models/Department'); 
// Q1--->1st step
const Employee = require('../models/Employee'); 

//Q1---> 2nd step
router.get('/by-name', async (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: 'Department name is required' });

  try {
    const department = await Department.findOne({ name });
    if (!department) return res.status(404).send("Department not found");

    const employee = await Employee.find({ _id: { $in: department.employeeIds } });
    //********************** 
        if (employee.length > 0) {
            res.status(200).json(employee);
        } else {
            res.status(404).send("Sorry, No data found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

//Q6==> Find how many employees are working in a  department
router.get('/empcount', async (req, res) => {
  try {
    const results = await Department.aggregate([
      {
        $project: {
          _id: 1,
          name: 1,
          location: 1,
          number_of_employees: { $size: "$employeeIds" }  // count size of employeeIds array
        }
      }
    ]);

    if (results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).send("No departments found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


module.exports = router;