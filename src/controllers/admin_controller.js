var mongoose  = require('mongoose')
var Post      = require('../models/post.js')

var adminController = function(){

  var newPost = function(req, res){
    res.render('admin/new_post')
  }

  var createPost = function(req, res){

    var _post = new Post(req.params)

    _post.save(function(err, savedPost){
      if(err){
        console.log(err);

      } else {
        console.log('SUCCESS');
        console.log(savedPost);
        req.flash('success', 'Post successfully created')
        res.redirect('/')
      }
    })
  }

  return {
    newPost   : newPost,
    createPost: createPost
  }
}

module.exports = adminController
