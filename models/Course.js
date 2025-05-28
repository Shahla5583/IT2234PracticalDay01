const mongoose=require('mongoose')
const courseSchema= new mongoose.Schema({
    code:{type:String,required:true},
    name:{type:String,required:true},
    credits:{type:Number,required:true},
    description:{type:String}
})

const Course=mongoose.model('courses',courseSchema)
/*const PHP= new Course({
    code:'IT1234',
    name:'Practical for PHP',
    credits:4,
    description:'Build a REST API with Node.js technology'
})
PHP.save()*/

module.exports=Course