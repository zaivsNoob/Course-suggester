const mongoose = require('mongoose')

const student_schema=new mongoose.Schema({
    student_id:{
        type:String,
        required:true,
        
    },
    s_name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    courses:[String]





},{
    timestamps:true
})

Student=mongoose.model('Student',student_schema,"Students")

module.exports=Student