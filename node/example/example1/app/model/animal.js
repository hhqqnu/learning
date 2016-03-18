/**
 * User: tom
 * Date: 2016-3-18
 * Time: 14:46
 */
var mongoose = require('../utils/mongoose');
var Schema = mongoose.Schema;
var animalSchema = new Schema({
	name: String,
	type: String
});
animalSchema.methods.findSimilarTypes = function (cb) {
	return this.model('Animal').find({type: this.type}, cb);
};
var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;