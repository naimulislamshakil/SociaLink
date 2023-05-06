const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	location: String,
	description: String,
	image: String,
	userPicturePath: String,
	likes: {
		type: Array,
		default: [],
	},
	comments: {
		type: Array,
		default: [],
	},
});

const POST_MODEL = mongoose.model('POST', postSchema);

module.exports = POST_MODEL;
