const express=require('express')
const router=express.Router()
const studentService=require('./studentservice')

router.get('/',(req,res)=>{
    const results = studentService.getstudents()
    if (results) 
    {
      res.status(200).json(results)  
    } 
    else
    {
       res.status(404).send("Sorry! No Data Found!") 
    }
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = studentService.getstudent(id)
    if (results) 
    {
      res.status(200).json(results)  
    } 
    else
    {
       res.status(404).send("Sorry! No Data Found!") 
    }
})

router.get('/gender/:gender',(req,res)=>{
  const gender = req.params.gender
  const results = studentService.getstudentByGender(gender)
  if (results) 
  {
    res.status(200).json(results)  
  } 
  else
  {
     res.status(404).send("Sorry! No Data Found!") 
  }
})



module.exports=router

