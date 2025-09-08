const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/about',(req,res)=>{
    res.render('about')
})
router.get('/doctors',(req,res)=>{
    res.render('doctors')
})
router.get('/services',(req,res)=>{
    res.render('services')
})
router.get('/faq',(req,res)=>{
    res.render('faq')
})
router.get('/contact',(req,res)=>{
    res.render('contact')
})
router.get('/appointment',(req,res)=>{
    res.render('appoinment')
})

module.exports = router