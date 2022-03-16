const express=require('express')

router=new express.Router();

const Student=require('../models/student')


router.post('/',async(req,res)=>{
    const student=new Student(req.body)
    
    try{    
        await student.save()
        
       res.send(student)

    }
    catch(e){
        res.status(500).send(e)
    }
})

router.get('/',async(req,res)=>{
    try{
        const student=await Student.find({})

    // res.send(student)
    res.render("index",{student:student})

    }
    catch(e){
        res.status(500).send(e)
    }
})


router.get('/:id',async(req,res)=>{
// const updates=Object.keys(req.body)
const id=req.params.id



    try {
        const student=await Student.findById(id)
       

        res.send(student)

        // updates.forEach((update)=>req.user[update]=req.body[update])
        // await req.user.save()


        
    } catch (e) {
        res.status(500).send(e)
    }
})


router.patch('/:id',async(req,res)=>{
    const updates=Object.keys(req.body)
    const id=req.params.id
    console.log(id)
    
    
        try {
            const student=await Student.findById(id)
           
    
    
            updates.forEach((update)=>student[update]=req.body[update])
            await student.save()
            
            res.send(student)
    
            
        } catch (e) {
            res.status(500).send(e)
        }
    })

router.delete('/:id',async (req,res)=>{
    const id=req.params.id
    console.log(id)

    try {
        await Student.findByIdAndRemove(id)
        res.send("delete complete")
    } catch (e) {
        
    }
})

module.exports=router