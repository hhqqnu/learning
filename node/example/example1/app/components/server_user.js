var express = require('express'),
	router = express.Router(),
	userModel = require('./server_user_model');

router.get('/', function (req, res, next) {
	userModel.find(function (err, user) {
		if (err) return res.json(err && err.message);
		res.json(user);
	});
});

router.get('/:id', function (req, res, next) {
	userModel.find({_id:req.params.id},function(err,doc){
		if(err) return res.json(err && err.message);
		res.json(doc);
	})
});
router.get('/list/:id/:page', function (req, res, next) {
	res.send(req.params.id + ',' + req.params.page);
});

router.post('/', function (req, res, next) {
	res.send('post ok');
});

router.param(['id', 'page'], function (req, res, next, value) {
	console.log('CALLED ONLY ONCE with', value);
	next();
});

router.param('id', function (req, res, next, id) {
	if (id > 100) {
		req.params['result'] = 'big';
	} else {
		req.params['result'] = 'small';
	}
	next();
});


module.exports = router;
