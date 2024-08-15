import mongoose from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
	date: {
		type: Date,
		required: [true, 'Appoiment date is required']
	},
	doctorId: {
		type: Number,
		required: [true, 'doctorId  is required']
	},
	pacientId: {
		type: Number,
		required: [true, 'pacientId  is required']
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const appointment = mongoose.model('Appointment', appointmentSchema);

export default appointment;