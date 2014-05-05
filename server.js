// server.js

// set up ========================
var express  = require('express');
var app      = express(); // create our app w/ express
var mongoose = require('mongoose');
var port     = process.env.PORT || 8080;

//connects to database.js for mongo address for better file structure.
//module.exports allows you to pass data from one file to another.
// Just using require('./config/database')doesn’t automagically
// give you access to those variables.
var database = require('./config/database');

// tells mongoose to connect to the url:...... in database.js.
mongoose.connect(database.url);

// configuration =================
app.configure(function() {
    app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); 						// log every request to the console
    app.use(express.bodyParser()); 							// pull information from html in POST
    app.use(express.methodOverride());
// simulate DELETE and PUT
});

// loads the routes
require('./app/routes')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);