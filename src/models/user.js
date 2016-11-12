var mongoose = require('mongoose')
var schema = mongoose.Schema

var userSchema = new schema({
  username: { type: String, unique: true },
  password: String,
  date    : { type: Date, default: Date.now }
})

var user = mongoose.model('User', userSchema)

module.exports = user
