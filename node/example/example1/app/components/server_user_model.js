/**
 * User: tom
 * Date: 2016-3-18
 * Time: 13:14
 */
var mongoose = require('../utils/mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String
});

userSchema.methods.string = function () {
	console.log(this);
};
userSchema.static('findByName', function (name, callback) {
	return this.find({name: name}, callback);
});

var User = mongoose.model('User', userSchema);

module.exports = User;
