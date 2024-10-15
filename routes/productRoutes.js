const express=require('express')
const Product = require('../models/Product')
const Arrival = require('../models/Arrival')
const router=express.Router()

router.get('/products',async(req,res)=>{
    const arrival=await Arrival.find({})
    const product=await Product.find({})
    res.render('products/index',{product,arrival})
})

router.get('/product/:id',async (req,res)=>{
    let {id}=req.params
    const find=await Product.findById(id)
    res.render('products/show',{find})
})

router.get('/show',(req,res)=>{
    res.render('products/show')
})

router.get('/checkout',(req,res)=>{
    res.render('products/checkout')
})

router.get('/cart',(req,res)=>{
    res.render('products/cart')
})

module.exports=router