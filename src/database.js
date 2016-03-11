'use strict';

var mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost/mean-todo', function(err) {
	if(err) {
		console.log('Failed connecting to Mongodb!');
	} else {
		console.log('Successfully connected to Mongodb!');
	}
});*/

mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_ACCOUNT + '@ds011399.mlab.com:11399/heroku_gpnhf9gl', function(err) {
	if(err) {
		console.log('Failed connecting to Mongodb!');
	} else {
		console.log('Successfully connected to Mongodb!');
	}
});