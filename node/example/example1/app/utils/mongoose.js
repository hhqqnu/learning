/**
 * User: tom
 * Date: 2016-3-18
 * Time: 13:14
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:28001', function (err) {
	err && console.error('mongodb connect error: ', err);
});

/*
var con = mongoose.createConnection();
con.open('mongodb://mongoA:11,mongosB:22',{mongos: true},function(){

});
*/

//mongoose.createConnection
module.exports = mongoose;