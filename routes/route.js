const express= require('express');
const Model= require('./../models/Model');
const router = express.Router();
const morgan= require('morgan');

router.get('/soccer', async(req,res,next)=>{
    const Sport = await Model.find({type:'Soccer'})

    console.warn(Sport);

    // res.render('soccer',{Sport:soccer})
    res.render('soccer',{Sport})
})

router.get('/', async(req,res,next)=>{
    let Sport = await Model.find({type:'soccer'})
    res.render('index',{Sport: Model})
    // next()
})

module.exports= router