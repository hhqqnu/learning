var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.10.215:28001/test');

var Cat = mongoose.model('Cat',{name:String});

var kitty = new Cat({name:'tom'});
kitty.save(function(err){
  if(err) return console.log(err);
  console.log('save ok');
});
