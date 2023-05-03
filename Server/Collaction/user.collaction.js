const Service = require('../Services/user.service');
const bcrypt = require('bcrypt');
const { genarateToken } = require('../Utils/genarateToken');

exports.createUserCollaction = async (req, res) => {
	try {
		const data = await Service.createUserService(req.body);

		res.status(200).json({
			status: 'Success',
			message: 'User Create Successfully..',
			data,
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: 'User Not Create Successfully..',
		});
	}
};

exports.loginUserCollaction = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await Service.loginUserService(email);

		if (!user) {
			return res.status(404).json({
				status: 'Failed',
				message: 'User Not Exist.',
			});
		}

		const isMatch = bcrypt.compareSync(password, user.password);

		if (!isMatch) {
			return res.status(404).json({
				status: 'Failed',
				message: 'Invalid credentials.',
			});
		}

		const token = genarateToken(email);

		const { password: pass, ...other } = user.toObject();

		res.status(200).json({
			status: 'Success',
			message: 'User Get Successfully..',
			user: other,
			token,
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: 'User Not Get Successfully..',
		});
	}
};
