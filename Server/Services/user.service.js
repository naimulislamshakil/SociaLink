const POST_MODEL = require('../Schema/post.schema');
const USER_MODEL = require('../Schema/user.schema');

exports.createUserService = async (data) => {
	const result = await USER_MODEL.create(data);

	return result;
};

exports.loginUserService = async (email) => {
	const result = await USER_MODEL.findOne({ email }).populate('friends');

	return result;
};
exports.meService = async (email) => {
	const result = await USER_MODEL.findOne({ email })
		.populate('post')
		.populate('friends');

	return result;
};

exports.getAllUserService = async () => {
	const result = await POST_MODEL.find();
	return result;
};

exports.createFriendService = async (id, email) => {
	const makeFriendUserData = await USER_MODEL.findById(id);

	const friend = {
		firstName: makeFriendUserData.firstName,
		lastName: makeFriendUserData.lastName,
		picturePath: makeFriendUserData.picturePath,
		occupation: makeFriendUserData.occupation,
		location: makeFriendUserData.location,
	};
	const userData = await USER_MODEL.updateOne(
		{ email },
		{ $push: { friends: friend } }
	);
	const result = await (await USER_MODEL.find({ email })).reverse();
	return result;
};
