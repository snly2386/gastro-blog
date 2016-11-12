var express        = require('express')
var bodyParser     = require('body-parser')
var cookieParser   = require('cookie-parser')
var mongoose       = require('mongoose')
var flash          = require('connect-flash')
var session        = require('express-session')
var expressLayouts = require('express-ejs-layouts')
var dotenv         = require('dotenv').config();
var passport       = require('passport')


var app = express()

var adminRouter   = require('./src/routes/admin_routes')()
var homeRouter    = require('./src/routes/home_routes')()
var commentRouter = require('./src/routes/comment_routes')()
var authRouter    = require('./src/routes/auth_routes')()
var userRouter    = require('./src/routes/user_routes')()

//static files
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.use(session({secret: 'foodBlog'}))
app.use(flash())

//passport config
require('./src/config/passport')(app)

//views
app.set('views', './src/views')
app.set('view engine', 'ejs')

//layouts
app.use(expressLayouts);

// routes
app.use('/admin', adminRouter)
app.use('/', homeRouter)
app.use('/comments', commentRouter)
app.use('/auth', authRouter)
app.use('/users', userRouter)

//fire up the database
mongoose.connect('mongodb://localhost:27017/foodBlog')


//home page
app.get('/', function(req, res){
  res.render('index', {
    messages: req.flash('info'),
    layout: 'layouts/application'
  })
})


//fire up the server
app.listen(3000, function(err){
  console.log('running server on port 3000...')
})
