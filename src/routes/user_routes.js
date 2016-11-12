var express        = require('express')
var userRouter     = express.Router()
var usersController = require('../controllers/users_controller.js')()


var router = function(){
  userRouter.route('/:id')
    .get(usersController.show)



  return userRouter
}

module.exports = router
