const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
	},
	{ timestamps: true }
);

userSchema.pre('save', function (next) {
	const password = this.password;
	const hashedPassword = bcrypt.hashSync(password);
	const profileView = Math.floor(Math.random() * 10000);
	const impress = Math.floor(Math.random() * 10000);
	this.password = hashedPassword;
	this.viewedProfile = profileView;
	this.impressions = impress;
	next();
});

const USER_MODEL = mongoose.model('User', userSchema);

module.exports = USER_MODEL;
