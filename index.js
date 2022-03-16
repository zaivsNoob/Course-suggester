const express=require('express');
const Student=require('./src/models/student')
require("./src/db/mongoose")

const student_router=require('./src/routers/student_router')



const app=express()
const port=process.env.PORT||4000
app.use(express.json())



console.log(__dirname)
app.use(express.static(__dirname+'/public'))
// app.use('/css',express.static(__dirname+'/public/css'))

app.set('views', './views')
app.set("view engine",'ejs')


app.use(student_router)


// app.get('/',(req,res)=>[
//     res.render('index')
// ])

app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})