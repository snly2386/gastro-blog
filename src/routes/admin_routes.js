var express         = require('express')
var adminRouter     = express.Router()
var adminController = require('../controllers/admin_controller.js')()


var router = function(){
  adminRouter.route('/new_post')
    .get(adminController.newPost)

  adminRouter.route('/create_post')
    .post(adminController.createPost)

  adminRouter.route('/upload_photo')
    .get(adminController.uploadPhoto)



  return adminRouter
}

module.exports = router
