import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
	pacientId: {
		type: Number,
		required: [true, 'PacientId  is required']
	},
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	birthdate: {
		type: Date,
		required: [true, 'Birthdate is required']
	},
	email: {
		type: String,
		required: [true, 'E-mail is required'],
		unique: true
	},
	phone: {
		type: String,
		required: [true, 'Phone is required']
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const pacient = mongoose.model('Pacient', pacientSchema);

export default pacient;
