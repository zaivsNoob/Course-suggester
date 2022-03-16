const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/course-suggester',{
    useNewUrlParser:true,
    
    
   
}).then(() => {
    console.log("database connected")
}).catch((e)=>{
    console.log(e)
})