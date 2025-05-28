const express=require('express');
const app=express();
const port=3001;
const mongoose=require('mongoose')


const coursert = require('./routes/courseRoute')
const studentsert = require('./routes/studentRoute')
const degreesert = require('./routes/degreeRoute')


app.use(express.json())
app.use('/course',coursert)
app.use('/student',studentsert)
app.use('/degree',degreesert)

mongoose.connect('mongodb://localhost:27017/studentinfDB').then(()=>

const employeeert = require('./routes/employeeRoute')
const departmentert = require('./routes/departmentRoute')
const etfert = require('./routes/etfRoute')
const projectert= require('./routes/projectRoute')

app.use(express.json())
app.use('/employee',employeeert)
app.use('/department',departmentert)
app.use('/etf',etfert)
app.use('/project',projectert)

mongoose.connect('mongodb://localhost:27017/companyDB').then(()=>

 { 
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})