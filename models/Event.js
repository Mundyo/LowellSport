
const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const DOMPurify = createDomPurify (new JSDOM().window)

const eventSchema = new mongoose.Schema({

    Sport:{
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
    contact:{
        type: Number,
        required: true
    },
    date:{
        type:Date,
        required:true
    },
    markdown:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
      },
 
  slug: {
    type: String,
    required: true,
    unique: true
  },
  sanitizedHtml: {
    type: String,
    required: true
  }
})

eventSchema.pre('validate', function(next) {
  if (this.Sport) {
    this.slug = slugify(this.Sport, { lower: true, strict: true })
  }

  if (this.markdown) {
    this.sanitizedHtml = DOMPurify.sanitize(this.markdown)
  }

  next()
})

module.exports = mongoose.model('Event', eventSchema)