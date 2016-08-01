var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')
var app = new express()
var port = 3000
var compiler = webpack(config)
const jwt = require('express-jwt')
const cors = require('cors')

var mongoose = require('mongoose')
var passport = require('passport')
var flash    = require('connect-flash')

var morgan       = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser   = require('body-parser')
var session      = require('express-session')

var configDB = require('./database.js')

mongoose.connect(configDB.url)

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

const authCheck = jwt({
	secret: new Buffer('akashtrial', 'base64'),
	audience: '1xdyfp0rdJkstEmwcmihXADUk8zh4KEx'
})

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.get("/", function (req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
	if (error) {
		console.error(error)
	} else {
		console.info("==> 🌎 Listeneing on port %s. Open http://localhost:%s/ in your browser.", port, port)
	}
})
