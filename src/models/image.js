var mongoose = require('mongoose')
var schema = mongoose.Schema

var imageSchema = new schema({
  url    : String,
  caption: String,
  date   : { type: Date, default: Date.now }
})

var image = mongoose.model('Image', imageSchema)

module.exports = image
