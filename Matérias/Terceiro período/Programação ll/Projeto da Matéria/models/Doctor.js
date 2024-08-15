import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
	doctorId: {
		type: Number,
		required: [true, 'doctorId  is required']
	},
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	login: {
		type: String,
		required: [true, 'login is required'],
		unique: true
	},
	password: {
		type: String,
		required: [true, 'Password is required']
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
	medicalSpecialty: {
		type: String,
		required: [true, 'Medical specialty is required']
	},
	medicalRegistration: {
		type: String,
		required: [true, 'Medical registration is required'],
		unique: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const doctor = mongoose.model('Doctor', doctorSchema);

export default doctor;
