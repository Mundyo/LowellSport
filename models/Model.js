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

// SportSchema.pre('validate', function(next) {
//     if (this.type) {
//       this.slug = slugify(this.type, { lower: true, strict: true })
//     }
  
//     if (this.name) {
//       this.sanitizedHtml = DOMPurify.sanitize(this.name)
//     }
  
//     next()
//   })



