var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')
var app = new express()
var port = 8080
var compiler = webpack(config)
const jwt = require('express-jwt')
const cors = require('cors')

var path = require('path')

var mongoose = require('mongoose')
var passport = require('passport')
var flash    = require('connect-flash')

var morgan       = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser   = require('body-parser')
var session      = require('express-session')

var configDB = require('./database.js')
import { Router, RouterContext } from 'react-router'
mongoose.connect(configDB.url)

console.log("Node Environment: ", process.env.NODE_ENV)

app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser())

app.use(session({secret: 'sessionsecret'}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.set('views', __dirname + '/src/js/containers');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

require('./config/passport')(passport)
require('./config/passport_init')(passport)

app.use(express.static(__dirname))

app.get("/home", function (req, res) {
	res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get("/signup", function (req, res) {
	res.sendFile(path.resolve(__dirname, 'index.html'),  {message: req.flash('signupMessage')})
})

app.listen(port, function(error) {
	if (error) {
		console.error(error)
	} else {
		console.info("==> 🌎 Listeneing on port %s. Open http://localhost:%s/ in your browser.", port, port)
	}
})

app.post('/signup', passport.authenticate('local-signup', {
	successRedirect: '/',
	failureRedirect: '/signup',
	failureFlash: true
}))

app.post('/', passport.authenticate('local-login', {
	successRedirect: '/home',
	failureRedirect: '/signup',
	failureFlash: true
}))

// Passport
app.get('/auth/facebook', 
	passport.authenticate('facebook', {scope: ['email']})
)

app.get('/auth/facebook/callback', 
	passport.authenticate('facebook', {
		successRedirect: '/home',
		failureRedirect: '/',
		scope: ['email']
	})
)
