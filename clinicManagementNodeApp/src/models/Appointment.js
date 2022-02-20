import  mongoose  from "mongoose";
const appointmentSchema = new mongoose.Schema({
  
    appointmentDate: {
      type: Date,
      required: true,
    },

    timeslot: {
        type: String,
        required: true,
      },
  
    bookingDate: {
      type: Date,
      required: true,
    },
  
    doctorNumber: {
        type: Number,
        required: true,
    },

    patientNumber: {
        type: Number,
        required: true,
    }
});

mongoose.model("Appointment", appointmentSchema);