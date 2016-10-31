var mongoose  = require('mongoose')
var Post      = require('../models/post.js')
var Image     = require('../models/image.js')

var homeController = function(){

  var index = function(req, res){
    var posts  = []

    Post.find({})
    .populate('images')
    .exec(function(err, allPosts){
      posts = allPosts
      res.render('index', {
        messages: req.flash('info'),
        layout  : 'layouts/application',
        posts   : allPosts
      })
    })
  }

  return {
    index : index
  }
}

module.exports = homeController
