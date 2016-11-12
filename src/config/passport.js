var passport = require('passport')

var config = function(app){
  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function(user, done){
    done(null, user)
  })

  passport.deserializeUser(function(user, done){
    done(null, user)
  })

  require('./strategies/local.strategy')()
}

module.exports = config
