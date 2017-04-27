var http      = require('http');
var mongoose  = require('mongoose');
var express   = require('express');
var app    = express();
var db;
var config = {
      "USER"    : "",           
      "PASS"    : "",
      "HOST"    : "ec2-34-209-113-86.us-west-2.compute.amazonaws.com",  
      "PORT"    : "27017", 
      "DATABASE" : "shopping"
    };
var dbPath  = "mongodb://"+config.USER + ":"+
    config.PASS + "@"+
    config.HOST + ":"+
    config.PORT + "/"+
    config.DATABASE;
var standardGreeting = 'Hello World!';
//var greetingSchema = mongoose.Schema({
//  sentence: String
//}); 
//var Greeting= mongoose.model('Greeting', greetingSchema);

//db = mongoose.connect(dbPath);
mongoose.connect(dbPath);
//mongoose.connection.once('open', function() {
//  var greeting;
// Greeting.find( function(err, greetings){
//   if( !greetings ){     
//     greeting = new Greeting({ sentence: standardGreeting }); 
//      greeting.save();
//    } 
//  }); 
//});
//app.get('/', function(req, res){
//  Greeting.findOne(function (err, greeting) {
//    res.send(greeting.sentence);
//  });
//});
//app.use(function(err, req, res, next){
//  if (req.xhr) {
//    res.send(500, 'Something went wrong!');
//  }
//  else {
//    next(err);
//  }
//});
//console.log('starting the Express (NodeJS) Web server');
//app.listen(8080);
//console.log('Webserver is listening on port 8080');
app.engine('.hbs',expressHbs({defaultLayout:'layout',extname:'.hbs'}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


