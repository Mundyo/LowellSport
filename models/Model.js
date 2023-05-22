const mongoose= require('mongoose');
const marked= require('marked');
const createDomPurify= require('dompurify');
const {JSDOM} = require('jsdom');
const DOMPurify= createDomPurify(new JSDOM().window)

const SportSchema = new mongoose.Schema({

    type:{
        type:String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }, 
    zipcode:{
        type: Number,
        required: true
    },
    city:{
        type:String,
        required:true
    },
})

module.exports= mongoose.model('Sport', SportSchema )




