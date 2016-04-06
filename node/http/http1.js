var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');
var parse = url.parse;
var join = path.join;
var root = __dirname;

var server = http.createServer(function(req,res){
  var url = parse(req.url);
  var path = join(root,url.pathname); 
  /*var stream = fs.createReadStream(path);
  stream.pipe(res);
  stream.on('error',function(err){
    res.statusCode = 500;
    res.end('Internal Server Error');
  });*/
  //stat 获取文件信息
  fs.stat(path,function(err,stat){
    if(err){
      if('ENOENT' == err.code){
        res.statusCode = 404;
        res.end('Not Found');
      }else{
        res.statusCode = 500;
        res.end('Internal Server error');
      }
    }else{
      res.setHeader('Content-Length',stat.size);
      var stream = fs.createReadStream(path);
      stream.pipe(res);
      stream.on('error',function(err){
        res.statusCode = 500;
        res.end('Internal Server Error:'+err && err.Message);
      })
    }
  })

});
server.listen(3000,function(err){
  console.log('server listening at :::3000');
});
