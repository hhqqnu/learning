var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/',function(req,res){
  if(req.cookies.isVisit){
    console.log(req.cookies);
    res.send('再次欢迎访问');
  }else{
    res.cookie('isVisit',1,{maxAge:60*1000});
    res.send('欢迎第一次访问');
  }
});



app.listen(3000,function(err){
  if(err){
    console.log('server error:'+err);return;
  }
  console.log('server listen port:3000');
})
