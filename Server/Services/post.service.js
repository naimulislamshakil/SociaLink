const POST_MODEL = require('../Schema/post.schema');

exports.createPostService = async (data) => {
	const datas = await POST_MODEL.create(data);
	const result = await POST_MODEL.find();
	return result;
};
