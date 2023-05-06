const POST_MODEL = require('../Schema/post.schema');

exports.createPostService = async (data) => {
	const result = await POST_MODEL.create(data);
	return result;
};
