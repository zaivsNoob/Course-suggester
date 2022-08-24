const mongoose = require("mongoose")


const courses_schema= new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    course_code:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
    },

    difficult_level :{
        type:Number,
        
    }

},{
    timestamps:true
})


Course = mongoose.model("Course",courses_schema,"Courses")

module.exports=Course