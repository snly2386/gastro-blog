var gulp    = require('gulp')
var nodemon = require('nodemon')

var jsFiles = ['*.js', 'src/**/*.js']

// tasks
gulp.task('inject', function(){
  var wiredep = require('wiredep').stream;
  var inject = require('gulp-inject')


  var injectSrc = gulp.src(['./public/css/*.css',
                            './public/js/*.js',
                            './public/vendor/css/*.css',
                            './public/vendor/js/jquery-1.11.3.js',
                            './public/vendor/js/instafeed.min.js',
                            './public/vendor/js/initializer.js',
                            './public/vendor/js/jquery.simplyscroll.js',
                            './public/vendor/js/jquery.scrollTo.min.js',
                            './public/vendor/js/lightbox.js',
                            './public/vendor/js/custom.js'], { read: false })

  var injectOptions = {
    ignorePath: '/public'
  }


  var wiredepOptions = {
    bowerJson: require('./bower.json'),
    directory: './public/vendor/bower_components',
    ignorePath: '../../../public'
  }

  return gulp.src('./src/views/layouts/*.ejs')
    .pipe(wiredep(wiredepOptions))
    .pipe(inject(injectSrc, injectOptions))
    .pipe(gulp.dest('./src/views/layouts'))
})

gulp.task('serve', ['inject'], function(){
  var options = {
    script: 'app.js',
    watch: jsFiles
  }

  return nodemon(options)
    .on('restart', function(){
      console.log('restarting...');
    })
})
