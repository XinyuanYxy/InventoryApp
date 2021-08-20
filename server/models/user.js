import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			trim: true,
			required: true,
		},
		lastName: {
			type: String,
			trim: true,
			required: true,
		},
		email: {
			type: String,
			trim: true,
			unique: true,
			required: true,
		},
		gender: {
			type: String,
			trim: true,
			required: true,
		},
		phoneNumber: {
			type: String,
			trim: true,
			required: true,
		},
		Products: {},
	},
	{ timestamps: true }
);

export default mongoose.model('User', userSchema);
