
const Student =require("../models/student")

exports.studentFormPost1= async(req,res)=>{
    
    const student=new Student(req.body)
      
    try{    
        await student.save()
        
        res.redirect(`/home/${req.body.student_id}`)

    }
    catch(e){
        res.status(500).send(e)
    }
}



exports.studentGetById2 =async(req,res)=>{
    // const updates=Object.keys(req.body)
    const id=req.params.id
    
    
    
        try {
            const student=await Student.findOne({student_id:id})
           
            const suggestions = {
                "power1":['eng091','eng101'],
                "power2":['cse110','cse111','eng091','eng101']
                
            }

            
            suggested=suggestions.power2.filter((item)=>item!==student.courses[0])
            console.log(suggested[2])
            // console.log(suggested[0])
            // console.log(suggested[1])

            res.render("home",{suggest:suggested,student})

           
            // res.render("home",{student:student})
    
            // updates.forEach((update)=>req.user[update]=req.body[update])
            // await req.user.save()
    
    
            
        } catch (e) {
            res.status(500).send(e)
        }
    }


    exports.studentUpdate3= async(req,res)=>{
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
        }


        exports.studentDelete4 =async (req,res)=>{
            const id=req.params.id
            console.log(id)
        
            try {
                await Student.findByIdAndRemove(id)
                res.send("delete complete")
            } catch (e) {
                
            }
        }


        exports.studentIndex5 = async (req,res)=>{
            try {
            res.render("index",{})
            } catch (e) {
                
            }
        }