'use strict';

var mongoose = require('mongoose');

mongoose.connect((process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mean-todo'), function(err) {
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});
