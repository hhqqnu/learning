var app = require('express')();
app.use(require('morgan')('dev'));
var session = require('express-session');
var FileStore = require('session-file-store')(session);

app.use(session({
  name:'server-session-cookie-id',
  secret:'my express secret',
  cookie:{maxAge:60*1000},
  saveUninitialized:true,
  resave:true,
  store:new FileStore()
}));

app.get('/',function initViewsCount(req,res,next){
  if(typeof req.session.views === 'undefined'){
    req.session.views = 1;
    return res.end('Welcome to the file session demo. Refresh page!');
  }
  return next();
});

app.get('/',function incrementViewsCount(req,res,next){
   console.assert(typeof req.session.views == 'number','missing views count in the session',req.session);
   req.session.views++;
   return next();
});

app.use(function printSession(req,res,next){
  console.log('req.session',req.session);
  return next();
});

app.get('/',function sendPageWithCounter(req,res){
   res.setHeader('Content-Type','text/html');
   res.write('<p>views:'+req.session.views+'</p>\n');
   res.end();
});


var server = app.listen(3000,function(){
  var host = server.address().address,
      port = server.address().port;
  console.log('Example app listening at %s port',port);
});
