const express=require('express')

const student_controller=require("../controllers/student_controller")

router=new express.Router();




router.post('/form_post',student_controller.studentFormPost1)

router.get('/',student_controller.studentIndex5)


router.get('/home/:id',student_controller.studentGetById2)


router.patch('/:id',student_controller.studentUpdate3)

router.delete('/:id',student_controller.studentDelete4)

module.exports=router