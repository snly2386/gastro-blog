var mongoose = require('mongoose')
var schema = mongoose.Schema

var imageSchema = new schema({
  _creator: { type: schema.Types.ObjectId, ref: 'Post' },
  url     : String,
  caption : String,
  date    : { type: Date, default: Date.now }
})

var image = mongoose.model('Image', imageSchema)

module.exports = image
