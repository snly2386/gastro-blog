var mongoose  = require('mongoose')
var Comment   = require('../models/comment.js')
var Post      = require('../models/post.js')

var commentsController = function(){

  var create = function(req, res){
    console.log('paramsss');
    console.log(req.body);
    if(req.user){
      var _comment = new Comment(req.body)
      console.log('initializing comments');
      _comment.save(function(err, newComment){
        console.log('saving comments');
        console.log(newComment);
        if(err){
          console.log('err');
          console.log(err);
        } else{
          Post.findById(req.body._post, function(err, post){
            post.comments.push(newComment)
            post.save(function(){
              console.log('SUCCESFFULLY CREATED COMMMENT!!');
              console.log(newComment);
              res.json(newComment)
            })
          })
        }
      })
    } else {
      res.status(500).send('Sign in to post a comment')
    }
  }

  return {
    create : create
  }
}

module.exports = commentsController
