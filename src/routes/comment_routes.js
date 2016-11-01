var express            = require('express')
var commentRouter      = express.Router()
var commentsController = require('../controllers/comments_controller.js')()


var router = function(){
  commentRouter.route('/create')
    .post(commentsController.create)



  return commentRouter
}

module.exports = router
