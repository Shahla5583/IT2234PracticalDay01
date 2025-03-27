
const express=require('express');
const app=express();
const port=3002;

/*let students =[
    {Reg_No:"2021ict109",name:"Sama",gender:"female",course:"It"},
    {Reg_No:"2021ict100",name:'Rama',gender:"female",course:'Bio'},
    {Reg_No:'2021ict45',name:'Chuma',gender:"female",course:'Math'},
    {Reg_No:'2021ict89',name:'kumar',gender:"male",course:'It'},
    {Reg_No:'2021ict79',name:'Raj',gender:"male",course:'Math'}
];*/

const students = require('./DB/studentsdb');

app.get('/',(req,res)=>{
    res.send(students);
});

app.get('/stu/:id',(req,res)=>{
    const id=req.params.id
    const result=students.find(student=>student.Reg_No === id);
    if (!result) {
        return res.status(404).send({ error: "Student not found" });
    }

    res.send(result);
})

app.get('/gender/:gen',(req,res)=>{
    const gen=req.params.gen
    const result=students.filter(student=>student.gender === gen);
    res.send(result);
})

app.get('/name/:name',(req,res)=>{
    const name=req.params.name
    const result=students.filter(student=>student.name === name)
    res.send(result)
})

app.get('/course/:course',(req,res)=>{
    const course=req.params.course
    const result=students.filter(student=>student.course === course)
    res.send(result)
})

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})
