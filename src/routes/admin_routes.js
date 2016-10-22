var express         = require('express')
var adminRouter     = express.Router()
var adminController = require('../controllers/admin_controller.js')()


var router = function(){
  adminRouter.route('/new_post')
    .get(adminController.newPost)

  adminRouter.route('/create_post')
    .post(adminController.createPost)
      // var _post = new Post({
      //   author: 'me',
      //   title : 'test',
      //   body  : 'is this shit even working'
      // })
      //
      // _post.save(function(err, savedPost){
      //   console.log(savedPost);
      // })



  return adminRouter
}

module.exports = router
