const Service = require('../Services/user.service');

exports.createUserCollaction = async (req, res) => {
	try {
		const data = await Service.createUserService(req.body);
		console.log(data);
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
