const express= require('express');
const Model= require('./../models/Model');
const router = express.Router();
const morgan= require('morgan');

router.get('/', async(req,res,next)=>{
    const Sport = await lowell.sport.findByType({type:'soccer'})
    res.render('index',{Sport:soccer})
    // next()
})

router.get('/soccer', async(req,res,next)=>{
    // const Sport = await lowell.sport.findByType({type:'soccer'})
    // res.render('soccer',{Sport:soccer})
    res.render('soccer')
})

module.exports= router