var express = require('express')
var path = require('path')
// var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cors = require('cors')
var ejs = require('ejs')

var index = require('./routes/index')
var movies = require('./routes/movies')

var app = express()
app.engine('html', ejs.__express)

// view engine setup

app.set('views', path.join(__dirname, 'views'))
// app.set("view engine", "jade");
app.set('view engine', 'html')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// var allowCrossDomain = function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')// 自定义中间件，设置跨域需要的响应头。
//   next()
// }
// app.use(allowCrossDomain)

// app.use(cors({
//   origin: ['*'], // 指定接收的地址
//   methods: ['GET', 'POST', 'DELETE', 'PUT'] // 指定接收的请求类型
//   // alloweHeaders: ['Content-Type', 'appliection/json'] // 指定header
// }))
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', index)
app.use('/_api', movies)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
