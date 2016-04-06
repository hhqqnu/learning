var http = require('http');
var url = require('url');//url主要是用于解析

var items = [];

var server = http.createServer(function(req,res){
  switch(req.method){
    case 'POST':
      var item = '';
      req.setEncoding('utf8');
      req.on('data',function(chunk){
        console.log(chunk);
        item += chunk;
      });
      req.on('end',function(){
        items.push(item);
        res.end('OK\n');
      });
      break;
    case 'GET':
     /* items.forEach(function(item,i){
        res.write(i+')'+item+'\n');
      });
      res.end();*/
      var body = items.map(function(item,i){
        return i+') ' + item;
      }).join('\n');
      res.setHeader('Content-type','text/plain');
      //此处主要是字节长度，而否字符长度。
      res.setHeader('Content-length',Buffer.byteLength(body, 'utf8'));
      res.end(body);
      break;
    case 'DELETE':
      var path = url.parse(req.url).pathname;
      var i = parseInt(path.slice(1),10);
      if(isNaN(i)){
        res.statusCode = 400;
        return res.end('Invalid item id');
      }
      if(!items[i]){
        res.statusCode = 404;
        return res.end('Item not found');
      }
      items.splice(i,1);
      res.end('OK\n');
      break;
  }
}).listen(3000,function(err){
  console.log('server listening at :::3000');
});
