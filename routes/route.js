// const express= require('express');
// const Sport= require('./../models/Model');
// const Event= require('./../models/Event');
// const router = express.Router();
// const morgan= require('morgan');
// const ejs = require('ejs');



// router.get('/soccer', async(req,res,next)=>{
//     axios.get('https:localhost:5000/soccer'
//     )
//     .then(response =>{
//         const sports = response.data;
//         const table= fs.readFileSync('table.ejs','utf8');
//         const rendered = ejs.render(table,{sports});
//         res.send(rendered);
//     })
//     .catch(error=>{
//         console.log(error);
//         res.send('an error occurred')
//     });
// });
    


// router.get('/', async(req,res,next)=>{
    
//     res.render('index',{Sport: Model})
   
//  });



// module.exports= router


// const fs =require('fs');
// const axios= require('axios');



const express= require('express');
const Model= require('./../models/Model');
const router = express.Router();
const morgan= require('morgan');
const axios = require('axios');
const ejs = require('ejs');
const fs = require('fs');
const Sport= require('../models/Model');


// router.get('/', async(req,res,next)=>{
//     const sports = await Model.find({type:'Soccer'})
// res.render('soccer',{sports})
// console.warn(sports);
//     });

    router.get('/soccer/:title', async (req, res) => {
        const sport = await Sport.find({ title: req.params.title });
        if (!sport) res.redirect('/');
        res.render('soccer', { sport: sport });
      });
      
      router.get('/basketball', function(req, res) {
        Sport.find({type: 'Basketball'}, function(err, Sport) {
          if (err) throw err;
          res.render('soccer', {Sport: Sport});
        });
    });
   

// router.get('/', async(req,res,next)=>{
//     let Sport = await Model.find({type:'soccer'})
//     res.render('index',{Sport: Model})
    
// })

module.exports= router

// router.get('/soccer', async (req,res,next)=>{
//     sport.find({},(err,sports)=>{
//         if (err){
//             console.log(err);
//             return;
//         }
//        console.log(sports);
        
//          res.render('soccer', sports)
//     });
    
// })


// sport.find({},(err,sport)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
// //     console.log(sport);
    
//     res.render('soccer', sport)
// });

// const sport = await Model.find(Sport,'type','soccer');

// console.warn(sport);
// });
 // router.get('/soccer/:title', async (req, res) => {
    //     const filter = { title: req.params.title };
    //     const articles = await Article.findMany(filter);
    //     if (articles.length === 0) {
    //       return res.redirect('/');
    //     }
    //     const article = articles[0];
    //     res.render('soccer', { sport });
    //   });
      