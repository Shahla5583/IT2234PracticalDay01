
const express=require('express')
const router=express.Router()
const userService=require('./userservice')

router.get('/',(req,res)=>{
    const results = userService.getusers()
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
    const results = userService.getuser(id)
    if (results) 
    {
      res.status(200).json(results)  
    } 
    else
    {
       res.status(404).send("Sorry! No Data Found!") 
    }
})

/*
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


*/
module.exports=router

