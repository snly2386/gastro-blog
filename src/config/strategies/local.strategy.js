var passport      = require('passport')
    localStrategy = require('passport-local').Strategy
    mongoose      = require('mongoose')
    User          = require('../../models/user.js')

var strategy = function(){
  passport.use(new localStrategy({
      usernameField: 'username',
      passwordField: 'password'
  }, function(username, password, done){
      User.findOne({username: username},
        function(err, foundUser){
          if(foundUser && foundUser.password == password){
            console.log('found user');
            console.log(done);
            done(null, foundUser, { message: 'Successfully Signed In'})
          } else {
            console.log('didint find user');
            done(null, false, {message: 'Bad Password'})
          }
        })
      })
    )
}

module.exports = strategy
