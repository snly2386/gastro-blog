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
                            './public/vendor/js/*.js'], { read: false })

  var injectOptions = {
    ignorePath: '/public'
  }


  var wiredepOptions = {
    bowerJson: require('./bower.json'),
    directory: './public/vendor/bower_components',
    ignorePath: '../../public'
  }

  return gulp.src('./src/views/*.ejs')
    .pipe(wiredep(wiredepOptions))
    .pipe(inject(injectSrc, injectOptions))
    .pipe(gulp.dest('./src/views'))
})

gulp.task('serve', function(){
  var options = {
    script: 'app.js',
    watch: jsFiles
  }

  return nodemon(options)
    .on('restart', function(){
      console.log('restarting...');
    })
})
