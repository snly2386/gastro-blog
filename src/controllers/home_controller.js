var mongoose  = require('mongoose')
var Post      = require('../models/post.js')

var homeController = function(){

  var index = function(req, res){
    var posts = []

    Post.find({}, function(err, allPosts){
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
