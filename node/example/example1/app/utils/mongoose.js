/**
 * User: tom
 * Date: 2016-3-18
 * Time: 13:14
 */
var mongoose = require('mongoose');
var config = require('./config');
mongoose.connect(config.mongodbConStr, function (err) {
	err && console.error('mongodb connect error: ', err);
});

module.exports = mongoose;
