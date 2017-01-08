// set up ======================================================================
var express  = require('express');
var app = express();                        // create our app w/express
var router = express.Router();							// use express router for our routes
var mongoose = require('mongoose');         // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console
var bodyParser = require('body-parser');    // pull information from HTML POST
var port = process.env.PORT || 3000;
//var db = require('./config/database');

// configuration ===============================================================
/*
mongoose.connect(db.url, function(err, response) {
	if (err)
		console.log('Fail to connect to '+ db.url);
	else
		console.log('Successfully connected to ' + db.url);
});
*/
app.use(express.static(__dirname + '/src'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json/

//require('./app/routes')(router);

//app.use('/', router);

app.listen(port, function() {
	console.log('Listening on port '+ port);
});
