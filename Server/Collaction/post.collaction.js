const Service = require('../Services/post.service');

exports.createPostCollaction = async (req, res) => {
	try {
		const { email } = req.user;
		const result = await Service.createPostService(req.body, email);
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: 'Post Not Created.',
		});
	}
};
