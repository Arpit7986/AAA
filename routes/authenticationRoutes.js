const express=require('express')
const router=express.Router()

router.get('/login',(req,res)=>{
    res.render('Authentication/Login')
})

router.get('/register',(req,res)=>{
    res.render('Authentication/Register')
})

module.exports=router