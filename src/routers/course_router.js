const express=require('express')
router=new express.Router();
const Course =require('../models/courses')

router.post("/course_post",async(req,res)=>{
    const course=new Course(req.body)
    try {

        course.save()
        res.send(course)
        console.log(course)
        
    } catch (e) {
        res.send(e)
    }
})

router.get('/:code',async(req,res)=>{
    const code=req.params.code
    try {
        const course=await Course.findOne({course_code:code})
        console.log(course)
        res.send(course)
    } catch (error) {
        
    }
} )

module.exports=router