import express from 'express';
import appoimentController from './AppointmentController.js';
import doctorController from './DoctorController.js';
import pacientController from './PacientController.js';
import prescriptionController from './PrescriptionController';

let router = express.Router();

router.get('/', function (req, res) {
	console.log('hi!');
	res.status(200).json({ message: 'hi!' });
});

router.use('/', appoimentController);
router.use('/', doctorController);
router.use('/', pacientController);
router.use('/', prescriptionController);

export default router;
