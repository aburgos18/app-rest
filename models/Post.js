const mongoose = require('mongoose');

//schema

const PostSquema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	date: {
		type: Date,
		default : Date.now
	}
});

module.exports = mongoose.model('Posts', PostSquema);