'use strict';

var mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost/mean-todo', function(err) {
	if(err) {
		console.log('Failed connecting to Mongodb!');
	} else {
		console.log('Successfully connected to Mongodb!');
	}
});*/

mongoose.connect(process.env.MONGOLAB_URI, function(err) {
	if(err) {
		console.log('Failed connecting to Mongodb!');
	} else {
		console.log('Successfully connected to Mongodb!');
	}
});