const students = require ('./studentdb') 

function getstudents()
{
    return students;
}

function getstudent(id)
{
    return students.find((student)=>student.regno==id)
}

function getstudentByGender(gender)
{
    return students.filter((student)=>student.gender==gender)
}

module.exports={getstudents,getstudent,getstudentByGender}