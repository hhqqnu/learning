var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var users = require('./app/components/server_user');
var roleApi = require('./app/components/role_api');
var animalApi = require('./app/components/animalapi');

var app = express();

app.set('port', 3000);
app.use('/static', express.static(__dirname + '/public'));
app.engine('html', require('ejs').__express);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/user', users);
app.use('/role', roleApi);
app.use('/animal/api', animalApi);

app.get('/animal', function (req, res) {
	res.render('index.html', {title: 'home'});
});


app.listen(app.get('port'));
console.log(app.get('env'));
console.log('server ok');
