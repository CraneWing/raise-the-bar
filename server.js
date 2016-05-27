var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1/raisethebar');
var bars = require('./app/routes/bars');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET || 'double secret',
  resave: false,
  saveUninitialized: false
}));

// // tell app to use Passport 
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use('/api/bars', bars);


app.get('*', function(req, res) {
	res.redirect('/#' + req.originalUrl);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'), function() {
  console.log('Wingardium leviosa! Magic at port ' + app.get('port'));
});