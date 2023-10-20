const mongoose = require('mongoose')

var schema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}, 
	artist: {
		type: String,
		required: true
	},
	album: {
		type: String,
		required: true
	},
	year: {
		type: Number,
		required: true
	}
});

const Songdb = mongoose.model('songdb', schema);

module.exports = Songdb;