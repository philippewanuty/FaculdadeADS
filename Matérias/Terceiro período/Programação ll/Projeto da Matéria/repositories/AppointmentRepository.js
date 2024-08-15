import Appointment from "../models/Appointment";

// ações de leitura

const getAllAppointment = async () => {
   return await Appointment.find();
}

const getAppointment = async (id) => {
	try {
      return await Appointment.findById(id);
   } catch (error) {
      throw new Error(error);

   }
};

const appointmentRepository = {};

export default appointmentRepository;
