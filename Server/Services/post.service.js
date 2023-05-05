const POST_MODEL = require('../Schema/post.schema');
const USER_MODEL = require('../Schema/user.schema');

exports.createPostService = async (data, email) => {
	const result = await POST_MODEL.create(data);
	const { _id: postId } = result;
	// console.log(userId);
	const user = await USER_MODEL.updateOne(
		{ email },
		{ $push: { post: postId.toString().match(/^[0-9a-fA-F]{24}$/)[0] } }
	);

	console.log(user);
	return result;
};

// exports.updatePostService = async (userId, id) => {
// 	const result = await USER_MODEL.findById({ _id: userId });
// 	result.post.push(id);
// 	result.save();
// };
