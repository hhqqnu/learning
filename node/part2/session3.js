var app = require('express')();
var session = require('express-session');
var bodyParser = require('body-parser');



app.listen(3000,function(){
  console.log('server listening at :::3000');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  secret:'recommand 128 bytes random string',
  cookie:{maxAge:60*1000}
}));

app.get('/',function(req,res,next){
  res.setHeader('Content-type','text/html');
  return res.send('<h1>Welcome come to node app </h1>');
});
app.get('/login',function(req,res,next){
  return res.send('this is login page');
});
app.get('/login/:userid',function(req,res,next){
  if(!req.session.userId){
    req.session.userId = req.params.userid;
  }
  res.redirect('/home');
});
app.get('/home',function(req,res,next){
  if(req.session.userId){
    return next();
  }
  return res.redirect('/login');
});
app.get('/home',function(req,res,next){
  res.setHeader('Content-type','text/html');
  return res.send('<h1>this is home page</h1>');
});
