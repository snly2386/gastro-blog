var mongoose  = require('mongoose')
var User      = require('../models/user.js')

var usersController = function(){

  var show = function(req, res){
    var id = req.params.id
    res.send(id)
  }

  return {
    show : show
  }
}

module.exports = usersController
