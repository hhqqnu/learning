var fs = require('fs');
var path = require('path');
var args = process.argv.splice(2);

var command =args.shift();

var taskDescription = args.join(' ');
var file = path.join(process.cwd(),'/.tasks');

switch (command){
  case 'list':
    listTasks(file);
    break;
  case 'add':
    addTask(file,taskDescription);
    break;
  default:
    console.log('')
}

function loadOrInitializeTaskArray(file,cb){
  fs.exists(file,function(exists){
    var tasks = [];
    if(exists){
      fs.readFile(file,'utf8',function(err,data){
        if(err) throw err;
        var data = data.toString();
        var tasks = JSON.parse(data || '[]');
        cb(tasks);
      })
    }else{
      cb([]);
    }
  });
}
