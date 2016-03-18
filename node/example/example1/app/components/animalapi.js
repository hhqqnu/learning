/**
 * User: tom
 * Date: 2016-3-18
 * Time: 14:49
 */
var express = require('express'),
	Animal = require('../model/animal'),
	router = express.Router();

router.get('/', function (req, res, next) {
	Animal.find(function (err, animals) {
		if (err) return res.json(err.message);
		res.json(animals);
	});
});

router.post('/', function (req, res, next) {
	var animal = new Animal({
		name: req.body.name,
		type: req.body.type
	});
	animal.save(function (err, doc) {
		var json = {error: '', data: ''};
		if (err) json.error = err.message;
		json.data = doc;
		res.json(json);
	});
});

router.get('/types', function (req, res, next) {
	Animal.find().distinct('type').exec(function (err, docs) {
		if (err) return res.json(err.message);
		res.json(docs);
	});
});

router.get('/:type', function (req, res, next) {
	var type = req.params.type;
	var dog = new Animal({type: type});
	dog.findSimilarTypes(function (err, dogs) {
		if (err) return res.json(err.message);
		res.json(dogs);
	});
});

module.exports = router;