var mongoose  = require('mongoose')
var User      = require('../models/user.js')
var passport  = require('passport')

var authController = function(){

  var signUp = function(req, res){
    var user = new User(req.body)
    user.save(function(err, newUser){
      if(err){
        console.log('error');
        console.log(err);
      } else {
        console.log('USER SUCCESSFULLY CREATED');
        console.log(newUser);
        res.redirect(`/users/${newUser._id}`  )
      }
    })
  }

  return {
    signUp : signUp
  }
}

module.exports = authController
