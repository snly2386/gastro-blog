var mongoose  = require('mongoose')
var Post      = require('../models/post.js')
var Image     = require('../models/image.js')

var homeController = function(){

  var index = function(req, res){
    var posts  = []

    Post.find({})
    .populate('images')
    .populate('comments')
    .exec(function(err, allPosts){
      posts = allPosts
      console.log('all postssss');
      console.log(allPosts);
      res.render('index', {
        messages: req.flash('info'),
        layout  : 'layouts/application',
        posts   : allPosts
      })
    })
  }

  var signIn = function(req, res){
    res.render('home/sign_in', {
      layout: 'layouts/application'
    })
  }

  return {
    index : index,
    signIn: signIn
  }
}

module.exports = homeController
