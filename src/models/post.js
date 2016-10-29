var mongoose = require('mongoose')
var schema = mongoose.Schema

var postSchema = new schema({
  author: String,
  title : String,
  body  : String,
  image : String,
  date  : { type: Date, default: Date.now }
})

// methods
postSchema.methods.bodyPreview = function(){
  return this.body.substring(0, 20) + '..'
}

var post = mongoose.model('Post', postSchema)

module.exports = post
