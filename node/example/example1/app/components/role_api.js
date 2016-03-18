/**
 * User: tom
 * Date: 2016-3-18
 * Time: 13:57
 */
var express = require('express'),
	router = express.Router(),
	roleModel = require('./server_role_model');

router.get('/', function (req, res, next) {
	roleModel.find(function (err, docs) {
		if (err) return res.json(err && err.message);
		res.json(docs);
	});
});

module.exports = router;