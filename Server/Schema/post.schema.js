const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	description: {
		type: String,
		required: true,
		trim: true,
	},
	image: {
		type: String,
		required: true,
	},
	like: Object,
	comments: Array,
});

const POST_MODEL = mongoose.model('POST', postSchema);

module.exports = POST_MODEL;
