var mongoose = require('mongoose')
var schema = mongoose.Schema

var postSchema = new schema({
  author: String,
  title : String,
  body  : String,
  date  : { type: Date, default: Date.now },
  images: [{type: schema.Types.ObjectId, ref: 'Image'}]
})

// methods
postSchema.methods.bodyPreview = function(){
  return this.body.substring(0, 20) + '..'
}

postSchema.methods.titleImage = function(){
  return this.images.length ? this.images[0].url : null
}

postSchema.methods.firstCharacter = function(){
  return this.body.substring(0, 1)
}

postSchema.methods.leftSection = function(){
  allBody = this.body.split('.')
  halfLength = Math.ceil(allBody.length / 2)
  return allBody.splice(0, halfLength).join('.')
}

postSchema.methods.rightSection = function(){
  allBody = this.body.split('.')
  halfLength = Math.ceil(allBody.length / 2)
  allBody.splice(0, halfLength)
  return allBody.join('.')
}

var post = mongoose.model('Post', postSchema)

module.exports = post
