const mongoose = require('mongoose')

const student_schema=new mongoose.Schema({
    student_id:{
        type:String,
        required:true,
        unique:true
    },
    s_name:{
        type:String,
        required:true
    },

    join_sem_name:{
        type:String,
    },  //spring2019

    current_sem:{
        type:String,
    },

    password:{
        type:String,
        required:true,
        minlength:6
    }





},{
    timestamps:true
})

Student=mongoose.model('Students',student_schema)

module.exports=Student