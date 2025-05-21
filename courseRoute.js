const express=require('express')
const router=express.Router()
const Course=require('../models/Course')
const mongoose = require('mongoose');

router.get('/',async (req,res)=>{
    try{
        const results = await Course.find()
        if (results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data found")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("Invalid ID format");
        }
        const results = await Course.findById(id);
        if (results) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, No data found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

router.get('/name/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const results = await Course.find({ name: name });

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, No courses found with that name");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});
router.get('/code/:cid', async (req, res) => {
    try {
        const cid = req.params.cid; // Fix variable name
        const results = await Course.find({ code: cid });

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


module.exports=router


