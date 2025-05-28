const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', async (req, res) => {
    try {
        const results = await Student.find().populate("degreeID"); // Fetch the degree details
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

module.exports = router;