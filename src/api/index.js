'use strict';

var express = require('express');
var Todo = require('../models/todo');
//var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function(req, res) {
	Todo.find({}, function(err, todos) {
		if(err) {
			// do something
			return res.status(500).json({message: err.message});
		}
		res.json({todos: todos});
	});
});

// POST route to create new entries
router.post('/todos', function(req, res) {
	var todo = req.body;
	Todo.create(todo, function(err, todo) {
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json({'todo': todo, message: 'Todo Created'});
	})
});

// PUT route to update existing entries
router.put('/todos/:id' /* _Id param used to update entries */, function(req, res) {
	var id = req.params.id; /* Grabs id param and stores it in id */
	var todo = req.body;
	if(todo /* verify todo exists */ && todo._id !== id /* todo id matches requested id */) {
		return res.status(500).json({err: "Ids don't match!"})
	}
	/* mongoose provides a findByIdAndUpdate method */
	Todo.findByIdAndUpdate(id /*id mongoose is going to look up to find our id*/, todo, /*tells mongo to return new data*/{ new: true}, function(err, todo) {
		if(err) {
			/* if there's an error send back a response of 500 and an error message */
			return res.status(500).json({err: err.message});
		}
		res.json({'todo': todo, message: 'Todo Created'});
	})
});

// TODO: Add DELETE route to delete existing entries


module.exports = router;