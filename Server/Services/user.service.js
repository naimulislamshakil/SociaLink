const USER_MODEL = require('../Schema/user.schema');

exports.createUserService = async (data) => {
	const result = await USER_MODEL.create(data);
	return result;
};
