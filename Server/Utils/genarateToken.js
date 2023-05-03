const jwt = require('jsonwebtoken');

exports.genarateToken = (email) => {
	const token = jwt.sign({ email }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});

	return token;
};
