var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.10.215:28001/test');
/*var mongoose = require('./mongoose');*/

var Cat = mongoose.model('Cat',{name:String});
/*Cat.find({ name: /^tom/ }, function(err,datas){
  if (err) {return console.log(err);}
  console.log(datas);
});*/

var Message = mongoose.model('Message',{
  "fromSip":String,
  "toSip":String,
  "MsgBody":String,
  "MsgDate":Date
});
var testMsg = new Message({
  "fromSip":"xingyitest2@shimaogroup.com",
  "toSip":"xingyitest3@shimaogroup.com",
  "MsgBody":"这是聊天内容",
  "MsgDate":Date.now()
});
/*testMsg.save(function(err,data){
  if (err) {return console.log(err);}
  console.log(data);
})*/
