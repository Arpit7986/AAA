const express = require('express');
const router = express();

const path=require('path')

router.set('views',path.join(__dirname, '../views'));

const paymentController = require('../models/Payment');

router.get('/payment',(req,res)=>{
    res.render('payment/purchase')
})

router.get('/payment/success',(req,res)=>{
    res.render('payment/success')
})

router.post('/createOrder', paymentController.createOrder);

module.exports = router;