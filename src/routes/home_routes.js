var express        = require('express')
var homeRouter     = express.Router()
var homeController = require('../controllers/home_controller.js')()


var router = function(){
  homeRouter.route('/')
    .get(homeController.index)



  return homeRouter
}

module.exports = router
