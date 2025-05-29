const express = require('express');
const router = express.Router();
const Project = require('../models/Project');


router.get('/', async (req, res) => {
    try {
        const results = await Project.find();
         // Fetch the degree details
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

// Q2--> 3 rd step

router.get('/', async (req, res) => {
    try {
        const results = await Project.find()
        .populate("employeeIds");
        
         
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

// POST bulk projects
router.post('/bulk', async (req, res) => {
  try {
    // req.body should be an array of project objects
    const inserted = await Project.insertMany(req.body);
    res.status(201).json({ message: 'Projects inserted successfully', data: inserted });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

//Q8=>Get project titles with full employee details
router.get('/project-employees', async (req, res) => {
  try {
    const projects = await Project.find({}, { _id: 1, title: 1, employeeIds: 1 })
      .populate('employeeIds', '_id name position'); // Only select desired fields from Employee

    if (projects.length > 0) {
      res.status(200).json(projects);
    } else {
      res.status(404).send("Sorry, No data found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


module.exports = router;

