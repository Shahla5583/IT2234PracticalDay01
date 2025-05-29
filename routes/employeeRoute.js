const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
// Q2--> 1 st step
const Project = require('../models/Project');

// Q2--> 2nd step
router.get('/by-name', async (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: 'Department name is required' });

  try {
    const employee = await Employee.findOne({name});
    if (!employee) return res.status(404).send("Department not found");

    const project = await Project.find({ _id: { $in: employee.projectIds } });
    
        if (project.length > 0) {
            res.status(200).json(project);
        } else {
            res.status(404).send("Sorry, No data found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});


// Q1--> 3rd step
router.get('/', async (req, res) => {
    try {
        const results = await Employee.find()
        .populate("projectIds")
        .populate("departmentId")
        .populate("etfId");
         

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, No data found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");

        
    }
});

// Q3-->
router.get('/names', async (req, res) => {
  try {
    const employees = await Employee.find({}, 'name'); // Only get the 'name' field
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});




router.post('/bulk', async (req, res) => {
    try {
        const employees = req.body; // expects an array of employee objects
        const inserted = await Employee.insertMany(employees);
        res.status(201).json({ message: 'Employees inserted', data: inserted });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

// Q4-->
router.get('/emp/:did', async (req, res) => {
  try {
    const { did } = req.params;
    const results = await Employee.find(
      { departmentId: did }, // ensure it matches schema
      { name: 1, departmentId: 1 }
    ).populate("departmentId").sort({ name: -1 });

    const filterResult = results.map(emp => ({
      employee_id: emp._id,
      employee_name: emp.name,
      department_name: emp.departmentId.name
    }));

    if (results.length > 0) {
      res.status(200).json(filterResult);
    } else {
      res.status(404).send("Sorry no data found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


//Q5=>   Returns a summary of all employees, including their employee ID, name, and the name of the department they belong to. 

router.get('/summary', async (req, res) => {
  try {
    const results = await Employee.find({}, { _id: 1, name: 1, departmentId: 1 })
      .populate('departmentId', 'name'); // populate only department name

    if (results.length === 0) {
      return res.status(404).send("Sorry, No data found");
    }

    // Map results to only include desired fields
    const filteredResults = results.map(emp => ({
      employee_id: emp._id,
      employee_name: emp.name,
      department_name: emp.departmentId ? emp.departmentId.name : null
    }));

    res.status(200).json(filteredResults);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


//Q7=> How many projects assigned to the employees
    router.get('/prcount', async (req, res) => {
  try {
    const results = await Employee.find();

    if (results.length === 0) {
      return res.status(404).send("Sorry, no data found!");
    }

    const newResults = results.map(emp => ({
      id: emp._id,
      name: emp.name,
      number_of_projects: emp.projectIds.length
    }));

    res.status(200).json(newResults);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error!");
  }
});


//Q9=>Get project names along with employee details
router.get('/position-counts', async (req, res) => {
  try {
    const results = await Employee.aggregate([
      {
        $group: {
          _id: "$position",             // group by position
          count: { $sum: 1 }            // count number of employees
        }
      },
      {
        $project: {
          _id: 0,                       // remove _id field
          position: "$_id",             // rename _id to position
          count: 1
        }
      }
    ]);

    if (results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).send("No positions found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});



module.exports = router;