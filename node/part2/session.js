var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
  secret:'recommand 128 bytes random string',
  cookie:{maxAge:60*1000}
}));

app.get('/',function(req,res){
  if(req.session.isVisit){
    req.session.isVisit++;
    res.send('<p>第次'+req.session.isVisit+'访问</p>');
  }else{
     req.session.isVisit = 1;
     res.send('欢迎第一次访问');
  }
});

app.listen(3000,function(err){
  if(err){
    console.log('err:'+err.message);
    return;
  }
  console.log('listen port 3000');
});
