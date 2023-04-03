const mongoose= require('mongoose');
const marked= require('marked');
const slugify = require('slugify');
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
    slug:{
        type: String,
        required: true,
        unique: true
    }
})

SportSchema.pre('validate', function(next){
    if (this.title){
        this.slug = slugify(this.title, {lower:true, strict: true})
    }
    next()
})

module.exports= mongoose.model('sport', SportSchema )