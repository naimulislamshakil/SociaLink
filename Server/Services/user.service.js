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
		id: makeFriendUserData._id,
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
	const result = await USER_MODEL.findOne({ email });

	return result;
};

exports.removeFriendService = async (id, email) => {
	const user = await USER_MODEL.findOne({ email });
	user.friends = user.friends.filter((friend) => friend.id.toString() !== id);
	user.save();
	return user;
};
