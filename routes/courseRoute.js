const express=require('express')
const router=express.Router()
const Course=require('../models/Course')
const { default: mongoose } = require('mongoose')

router.get('/',async (req,res)=>{
    try{
        const results = await Course.find() //- Fetches all courses from the database.

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

router.get('/:id',async (req,res)=>{
    try{
        const id=req.params.id   // Extract ID from request parameters

        const results = await Course.findById(id) //// Find course by ID

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

router.get('/code/:cid', async (req, res) => { // Route based on course code

    try {
        const cid = req.params.cid;
        const results = await Course.find({ code: cid });

        if (!results.length) {  // Improved null check
            return res.status(404).send("Sorry, No data found");
        }
        
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// update
router.put('/course/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {  // Validate ID format

            return res.status(400).send("Invalid ID!");
        }

        const updatedCourse = await Course.findByIdAndUpdate(id, req.body, { new: true }); // Corrected update method

        if (!updatedCourse) {
            return res.status(404).send("Course not found!");
        }

        res.status(200).json(updatedCourse);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

//Add a new course
router.post('/',async (req,res)=>{
    try{
        const {code,name,credits,descriptions}=req.body
    
         if(!code || !name || !credits){
            res.status(400).send("Please provide the required fields!")

         }else{
            const results = await Course.create({code,name,credits,descriptions})
            res.status(200).json(results)

         }

    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})


router.delete('/:id',async (req,res)=>{
    try{
        const id=req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID!")
        }

        const dcourse=await Course.findById(id)
        const results = await dcourse.deleteOne(dcourse).catch(
            (error)=>{return res.status(500).json(error)}
        )
        res.status(200).json(results)

    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})
module.exports=router