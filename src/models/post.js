var mongoose = require('mongoose')
var schema = mongoose.Schema

var postSchema = new schema({
  author: String,
  title : String,
  body  : String,
  date  : { type: Date, default: Date.now }
})

var post = mongoose.model('Post', postSchema)

module.exports = post
