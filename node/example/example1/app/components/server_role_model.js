/**
 * User: tom
 * Date: 2016-3-18
 * Time: 13:50
 */
var mongoose = require('../utils/mongoose');
var Schema = mongoose.Schema;
var roleSchema = new Schema({
	name: {
		type: String,
		default: 'user'
	},
	remark: String
});

var Role = mongoose.model('Role', roleSchema);

module.exports = Role;