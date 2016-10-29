var mongoose  = require('mongoose')
  , Post      = require('../models/post.js')
  , aws       = require('aws-sdk')

var adminController = function(){

  var newPost = function(req, res){
    res.render('admin/new_post', { layout: false })
  }

  var createPost = function(req, res){
    console.log(req.body);
    var image = 'https://' + process.env.S3_BUCKET + '.s3.amazonaws.com' + '/' + req.body.image
    req.body.image = image
    var _post = new Post(req.body)

    _post.save(function(err, savedPost){
      if(err){
        console.log(err);

      } else {
        console.log('SUCCESFULLY CREATED POST');
        console.log(savedPost);
        req.flash('info', 'Post successfully created')
        res.redirect('/')
      }
    })
  }

  var uploadPhoto = function(req, res){
    aws.config.update({accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY, region: 'us-west-2'})

    var s3      = new aws.S3()
    var options = {
      Bucket: process.env.S3_BUCKET,
      Key: req.query.file_name,
      Expires: 60,
      ContentType: req.query.file_type,
      ACL: 'public-read'
    }

    s3.getSignedUrl('putObject', options, function(err, data){
      if(err) return res.send('Error with S3')
      res.json({
        signed_request: data,
        url: 'https://' + process.env.S3_BUCKET + '.s3.amazonaws.com' + '/' + req.query.file_name
      })
    })
  }

  return {
    newPost    : newPost,
    createPost : createPost,
    uploadPhoto: uploadPhoto
  }
}

module.exports = adminController
