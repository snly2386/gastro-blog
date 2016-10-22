var express      = require('express')
var bodyParser   = require('body-parser')
var cookieParser = require('cookie-parser')
var mongoose     = require('mongoose')
var flash        = require('connect-flash')
var session      = require('express-session')


var app = express()

var adminRouter = require('./src/routes/admin_routes')()

//static files
app.use(express.static('public'))
app.use(cookieParser())
app.use(session({secret: 'foodBlog'}))
app.use(flash())

//views
app.set('views', './src/views')
app.set('view engine', 'ejs')

// routes
app.use('/admin', adminRouter)

//fire up the database
mongoose.connect('mongodb://localhost:27017/foodBlog')

//home page
app.get('/', function(req, res){
  res.render('index')
})


//fire up the server
app.listen(3000, function(err){
  console.log('running server on port 3000...')
})
