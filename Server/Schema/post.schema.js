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
	picturePath: String,
	userPicturePath: String,
	likes: {
		type: Map,
		of: Boolean,
	},
	comments: {
		type: Array,
		default: [],
	},
});

const POST_MODEL = mongoose.model('POST', postSchema);

module.exports = POST_MODEL;
