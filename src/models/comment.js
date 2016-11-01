var mongoose = require('mongoose')
var schema = mongoose.Schema

var commentSchema = new schema({
  _post   : { type: schema.Types.ObjectId, ref: 'Post' },
  name    : String,
  body    : String,
  date    : { type: Date, default: Date.now }
})

var comment = mongoose.model('Comment', commentSchema)

module.exports = comment
