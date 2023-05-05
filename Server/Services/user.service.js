const USER_MODEL = require('../Schema/user.schema');

exports.createUserService = async (data) => {
	const result = await USER_MODEL.create(data);

	return result;
};

exports.loginUserService = async (email) => {
	const result = await USER_MODEL.findOne({ email });

	return result;
};
exports.meService = async (email) => {
	const result = await USER_MODEL.findOne({ email }).populate('post');

	return result;
};
