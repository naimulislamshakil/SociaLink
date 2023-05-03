const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			min: 5,
		},
		picturePath: {
			type: String,
			default: '',
		},
		friends: {
			type: Array,
			default: [],
		},
		location: String,
		occupation: String,
		viewedProfile: Number,
		impressions: Number,
		passwordChangeAt: Date,
		passwordResetToken: String,
		passwordResetExpires: Date,
	},
	{ timestamps: true }
);

const USER_MODEL = mongoose.model('User', userSchema);

module.exports = USER_MODEL;
