var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//var routes = require('./app/routes/index');
var users = require('./app/routes/users');
var exhibits = require('./app/routes/exhibit');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(session({
//  secret: '12345678'
//}));
app.use(passport.initialize());
//app.use(passport.session());

//set up passport strategy
var User = require('./app/models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//set up mongodb
var uristring = 'mongodb://heroku_hx9394wr:u88l2m5fiaq65afckma5j9ivla@ds021034.mlab.com:21034/heroku_hx9394wr' ||'mongodb://localhost:27017/exhibitdb';
mongoose.connect(uristring);

//app.use('/', routes);

app.use('/users', users);
app.use('/api', exhibits);
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/libs', express.static(__dirname + '/public/libs'));
app.use('/views', express.static(__dirname + '/public/views'));
app.all('/*', function(req,res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
