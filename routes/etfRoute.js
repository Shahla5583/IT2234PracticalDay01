const express = require('express');
const router = express.Router();
const Etf= require('../models/Etf');

router.get('/', async (req, res) => {
    try {
        const results = await Etf.find();
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
// POST bulk ETFs
router.post('/bulk', async (req, res) => {
  try {
    // req.body should be an array of ETF objects
    const inserted = await Etf.insertMany(req.body);
    res.status(201).json({ message: 'ETFs inserted successfully', data: inserted });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;