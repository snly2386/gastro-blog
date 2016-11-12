var express         = require('express')
var authRouter      = express.Router()
var passport        = require('passport')
var authController  = require('../controllers/auth_controller.js')()


var router = function(){
  authRouter.route('/sign_up')
    .post(authController.signUp)

  authRouter.route('/sign_in')
    .post(passport.authenticate('local', {
      failureRedirect: '/'
    }), function(req, res){
      res.redirect('/')
      var id = req.body
      console.log('user');
      console.log(req.user);
      console.log('ID SHUD BE HERERER');
      console.log(id);
      // res.redirect('/users/')
    })

  return authRouter
}

module.exports = router
